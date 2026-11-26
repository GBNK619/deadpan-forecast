import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "In Glassmere today, expect light rain of spoons by noon, clearing to a high of 21 degrees and a 40 percent chance of déjà vu.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// Read-back validation: the written file must equal the line exactly.
const written = readFileSync(outPath, "utf8");
if (written !== LINE + "\n") {
  console.error("entry.txt does not match the expected line");
  process.exit(1);
}
