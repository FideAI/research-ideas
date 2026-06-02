import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const ideasDir = path.join(repoRoot, "ideas");
const distDir = path.join(repoRoot, "dist");

const sourceRepo =
  process.env.RESEARCH_IDEAS_SOURCE_REPO ?? "https://github.com/FideAI/research-ideas";
const sourceBranch = process.env.RESEARCH_IDEAS_SOURCE_BRANCH ?? "main";

async function generatedAt(distFile) {
  if (process.env.RESEARCH_IDEAS_GENERATED_AT) {
    return process.env.RESEARCH_IDEAS_GENERATED_AT;
  }

  try {
    const existingFeed = JSON.parse(await readFile(distFile, "utf8"));
    if (
      typeof existingFeed.generated_at === "string" &&
      existingFeed.generated_at.trim()
    ) {
      return existingFeed.generated_at;
    }
  } catch (error) {
    if (error?.code !== "ENOENT") {
      throw error;
    }
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

function parseList(markdown) {
  return markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());
}

function parseIdea(file, content) {
  const titleLine = requiredMatch(content, /^#\s+(.+)$/m, "title", file);
  const id = requiredMatch(titleLine, /^(FID-\d{3})\s*:/, "idea id", file);
  const title = titleLine.replace(/^FID-\d{3}:\s*/, "").trim();
  const status = requiredMatch(content, /^Status:\s+`([^`]+)`$/m, "status", file);
  const track = requiredMatch(content, /^Track:\s+`([^`]+)`$/m, "track", file);
  const primaryNeed = requiredMatch(
    content,
    /^Primary need:\s+(.+)$/m,
    "primary need",
    file,
  );
  const question = firstParagraph(optionalSection(content, "Question"));
  const whyItMatters = firstParagraph(optionalSection(content, "Why It Matters"));
  const waysToHelp = parseList(optionalSection(content, "Ways to Help"));

  return {
    id,
    title,
    status,
    track,
    primary_need: primaryNeed,
    summary: question,
    why_it_matters: whyItMatters,
    ways_to_help: waysToHelp,
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
  generated_at: await generatedAt(distFile),
  source_repo: sourceRepo,
  source_branch: sourceBranch,
  idea_count: ideas.length,
  tracks: {
    "christian-church":
      "Explicitly designed to benefit the Christian church: churches, clergy, Christian educators, ministries, denominations, seminaries, publishers, and Christian families.",
    "broader-faith-safety":
      "Relevant to faith communities, AI ethics, AI safety, evaluation science, governance, pluralism, or high-trust deployment more broadly.",
  },
  ideas,
};

await mkdir(distDir, { recursive: true });
await writeFile(
  distFile,
  `${JSON.stringify(feed, null, 2)}\n`,
);

console.log(`Wrote ${ideas.length} ideas to dist/research-ideas.json`);
