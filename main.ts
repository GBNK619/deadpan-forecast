import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "In Glassmere today, expect light rain of spoons by noon, clearing to a high of 21 degrees and a 40 percent chance of déjà vu.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
