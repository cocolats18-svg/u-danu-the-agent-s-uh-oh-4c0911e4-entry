// The Agent's Uh-Oh — u-danu-the-agent-s-uh-oh-4c0911e4
// One word an agent says when it has no idea what to do.
// DRAFT: writes the entry word to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The word: the sound of a machine's brain falling over mid-task.
// An agent that has no idea what to do does not say "hmm" — it segfaults.
// One word, 8 characters, no trailing newline: exactly what the gate wants.
const WORD = "segfault";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
