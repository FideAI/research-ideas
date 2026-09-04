import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const ideasDir = path.join(repoRoot, "ideas");
const distDir = path.join(repoRoot, "dist");

const sourceRepo =
  process.env.RESEARCH_IDEAS_SOURCE_REPO ?? "https://github.com/FideAI/research-ideas";
const sourceBranch = process.env.RESEARCH_IDEAS_SOURCE_BRANCH ?? "main";
const allowedTracks = new Set([
  "christian-church",
  "faith-domain",
  "broader-trustworthy-ai",
]);

function generatedAt() {
  if (process.env.RESEARCH_IDEAS_GENERATED_AT) {
    return process.env.RESEARCH_IDEAS_GENERATED_AT;
  }
  return new Date().toISOString();
}

function requiredMatch(content, pattern, field, file) {
  const match = content.match(pattern);
  if (!match?.[1]?.trim()) {
    throw new Error(`${file}: missing ${field}`);
  }
  return match[1].trim();
}

function optionalSection(content, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = content.match(
    new RegExp(`## ${escaped}\\n\\n([\\s\\S]*?)(?=\\n## |\\n$)`, "m"),
  );
  return match?.[1]?.trim() ?? "";
}

function firstParagraph(markdown) {
  return markdown
    .split(/\n\s*\n/)
    .map((part) => part.replace(/\s+/g, " ").trim())
    .find(Boolean) ?? "";
}

function prose(markdown) {
  return markdown.replace(/\s+/g, " ").trim();
}

function parseList(markdown) {
  const items = [];
  let current = "";

  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trim();
    if (line.startsWith("- ")) {
      if (current) items.push(current);
      current = line.slice(2).trim();
    } else if (line && current) {
      current = `${current} ${line}`;
    }
  }

  if (current) items.push(current);
  return items;
}

function parseIdea(file, content) {
  const titleLine = requiredMatch(content, /^#\s+(.+)$/m, "title", file);
  const id = requiredMatch(titleLine, /^(FID-\d{3})\s*:/, "idea id", file);
  const title = titleLine.replace(/^FID-\d{3}:\s*/, "").trim();
  const status = requiredMatch(content, /^Status:\s+`([^`]+)`$/m, "status", file);
  const track = requiredMatch(content, /^Track:\s+`([^`]+)`$/m, "track", file);
  if (!allowedTracks.has(track)) {
    throw new Error(`${file}: unsupported track ${track}`);
  }
  const primaryNeed = requiredMatch(
    content,
    /^Primary need:\s+(.+)$/m,
    "primary need",
    file,
  );
  const researchArea = content.match(/^Research area:\s+(.+)$/m)?.[1]?.trim();
  const question = firstParagraph(optionalSection(content, "Question"));
  const whyItMatters = firstParagraph(optionalSection(content, "Why It Matters"));
  const waysToHelp = parseList(optionalSection(content, "Ways to Help"));
  const hypothesis = prose(optionalSection(content, "Hypothesis"));
  const proposedMethod = parseList(optionalSection(content, "Proposed Method"));
  const neededControls = parseList(optionalSection(content, "Needed Controls"));
  const relationshipToExistingIdeas = prose(
    optionalSection(content, "Relationship to Existing Ideas"),
  );
  const outputs = parseList(optionalSection(content, "Outputs"));
  const openQuestions = parseList(optionalSection(content, "Open Questions"));
  const publicClaimBoundary = prose(
    optionalSection(content, "Public Claim Boundary"),
  );

  return {
    id,
    title,
    status,
    track,
    primary_need: primaryNeed,
    ...(researchArea ? { research_area: researchArea } : {}),
    summary: question,
    why_it_matters: whyItMatters,
    ways_to_help: waysToHelp,
    ...(hypothesis ? { hypothesis } : {}),
    ...(proposedMethod.length ? { proposed_method: proposedMethod } : {}),
    ...(neededControls.length ? { needed_controls: neededControls } : {}),
    ...(relationshipToExistingIdeas
      ? { relationship_to_existing_ideas: relationshipToExistingIdeas }
      : {}),
    ...(outputs.length ? { outputs } : {}),
    ...(openQuestions.length ? { open_questions: openQuestions } : {}),
    ...(publicClaimBoundary ? { public_claim_boundary: publicClaimBoundary } : {}),
    source_path: `ideas/${file}`,
    url: `${sourceRepo}/blob/${sourceBranch}/ideas/${file}`,
  };
}

const files = (await readdir(ideasDir))
  .filter((file) => /^FID-\d{3}-.+\.md$/.test(file))
  .sort();

const ideas = [];
for (const file of files) {
  const content = await readFile(path.join(ideasDir, file), "utf8");
  ideas.push(parseIdea(file, content));
}

const distFile = path.join(distDir, "research-ideas.json");

const feed = {
  schema_version: 1,
  generated_at: generatedAt(),
  source_repo: sourceRepo,
  source_branch: sourceBranch,
  idea_count: ideas.length,
  tracks: {
    "christian-church":
      "Explicitly designed to benefit the Christian church: churches, clergy, Christian educators, ministries, denominations, seminaries, publishers, and Christian families.",
    "faith-domain":
      "Directly studies faith-facing systems, religious sources, traditions, practices, communities, or institutions across one or more faith contexts.",
    "broader-trustworthy-ai":
      "Studies technical, evaluative, governance, or human-impact questions intended to transfer across domains, including high-trust settings.",
  },
  ideas,
};

await mkdir(distDir, { recursive: true });
await writeFile(
  distFile,
  `${JSON.stringify(feed, null, 2)}\n`,
);

console.log(`Wrote ${ideas.length} ideas to dist/research-ideas.json`);
