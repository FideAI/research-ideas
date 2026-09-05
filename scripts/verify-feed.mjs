import { readFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const feed = JSON.parse(
  await readFile(path.join(repoRoot, "dist", "research-ideas.json"), "utf8"),
);

process.env.RESEARCH_IDEAS_GENERATED_AT = feed.generated_at;
await import("./build-feed.mjs");
