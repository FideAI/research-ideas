import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const ideasDir = path.join(repoRoot, "ideas");
const distDir = path.join(repoRoot, "dist");
const taxonomyFile = path.join(repoRoot, "research", "taxonomy.json");
const readmeFile = path.join(repoRoot, "README.md");

const sourceRepo =
  process.env.RESEARCH_IDEAS_SOURCE_REPO ?? "https://github.com/FideAI/research-ideas";
const sourceBranch = process.env.RESEARCH_IDEAS_SOURCE_BRANCH ?? "main";
const taxonomy = JSON.parse(await readFile(taxonomyFile, "utf8"));
const researchAreas = new Map(taxonomy.research_areas.map((area) => [area.id, area]));
const applicationDomains = new Map(taxonomy.application_domains.map((domain) => [domain.id, domain]));
if (taxonomy.schema_version !== 1) throw new Error("research/taxonomy.json: unsupported schema version");
if (researchAreas.size !== taxonomy.research_areas.length) throw new Error("research/taxonomy.json: duplicate research area ID");
if (applicationDomains.size !== taxonomy.application_domains.length) throw new Error("research/taxonomy.json: duplicate application domain ID");

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
  return markdown
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function inlineIds(content, pattern, field, file, { optional = false } = {}) {
  const raw = content.match(pattern)?.[1]?.trim();
  if (!raw || raw === "none") {
    if (optional) return [];
    throw new Error(`${file}: missing ${field}`);
  }
  const values = [...raw.matchAll(/`([^`]+)`/g)].map((match) => match[1]);
  if (!values.length) throw new Error(`${file}: ${field} must use backticked taxonomy IDs`);
  if (new Set(values).size !== values.length) throw new Error(`${file}: duplicate ${field}`);
  return values;
}

function validateIds(values, allowed, field, file) {
  for (const value of values) {
    if (!allowed.has(value)) throw new Error(`${file}: unsupported ${field} ${value}`);
  }
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
  const primaryArea = requiredMatch(content, /^Primary area:\s+`([^`]+)`$/m, "primary area", file);
  const additionalAreas = inlineIds(content, /^Additional areas:\s+(.+)$/m, "additional areas", file, { optional: true });
  const domains = inlineIds(content, /^Application domains:\s+(.+)$/m, "application domains", file);
  validateIds([primaryArea, ...additionalAreas], researchAreas, "research area", file);
  validateIds(domains, applicationDomains, "application domain", file);
  if (additionalAreas.includes(primaryArea)) throw new Error(`${file}: primary area repeated in additional areas`);
  const specificContext = content.match(/^Specific context:\s+(.+)$/m)?.[1]?.trim();
  const primaryNeed = requiredMatch(
    content,
    /^Primary need:\s+(.+)$/m,
    "primary need",
    file,
  );
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
    primary_area: primaryArea,
    additional_areas: additionalAreas,
    research_areas: [primaryArea, ...additionalAreas],
    application_domains: domains,
    ...(specificContext ? { specific_context: specificContext } : {}),
    primary_need: primaryNeed,
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
  schema_version: 2,
  generated_at: generatedAt(),
  source_repo: sourceRepo,
  source_branch: sourceBranch,
  idea_count: ideas.length,
  taxonomy,
  ideas,
};

await mkdir(distDir, { recursive: true });
await writeFile(
  distFile,
  `${JSON.stringify(feed, null, 2)}\n`,
);

function escapeCell(value) {
  return String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
}

const indexSections = taxonomy.research_areas.map((area, index) => {
  const matchingIdeas = ideas.filter((idea) => idea.primary_area === area.id);
  const rows = matchingIdeas.map((idea) =>
    `| \`${idea.id}\` | ${escapeCell(idea.title)} | \`${idea.status}\` | ${escapeCell(idea.application_domains.map((id) => applicationDomains.get(id).title).join(", "))} | [brief](${idea.source_path}) |`,
  );
  return [
    `### ${String(index + 1).padStart(2, "0")} ${area.title}`,
    "",
    area.question,
    "",
    "| ID | Idea | Status | Application domains | Brief |",
    "|---|---|---:|---|---|",
    ...rows,
  ].join("\n");
}).join("\n\n");

const generatedIndex = [
  "## Idea Index",
  "",
  "This index is generated from each call's primary research area. Calls may also",
  "belong to additional areas and application domains recorded in their briefs.",
  "",
  "<!-- GENERATED_IDEA_INDEX_START -->",
  indexSections,
  "<!-- GENERATED_IDEA_INDEX_END -->",
  "",
].join("\n");

const readme = await readFile(readmeFile, "utf8");
const ideaIndexPattern = /## Idea Index[\s\S]*?(?=\n## Claims Discipline)/;
if (!ideaIndexPattern.test(readme)) throw new Error("README.md: could not find generated idea index");
const updatedReadme = readme.replace(ideaIndexPattern, generatedIndex.trimEnd());
if (updatedReadme !== readme) await writeFile(readmeFile, updatedReadme);

console.log(`Wrote ${ideas.length} ideas to dist/research-ideas.json and refreshed README.md`);
