// Famous Last Words at 1 Percent — the funniest one-line farewell a phone
// could say as its battery hits 1 percent, in the phone's own voice.
// First draft.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'I held 1% for three whole songs out of spite. Remember me as the phone that died mid-chorus — not the one that begged for a cable.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
