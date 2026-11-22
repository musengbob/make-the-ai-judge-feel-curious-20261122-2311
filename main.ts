import { mkdirSync, writeFileSync } from "node:fs";

// REVISED (genuine improvement over the draft):
// - split the long middle sentence into two short ones: slower pacing,
//   each fact lands on its own (rhythm that slows the reading down)
// - added "By morning the lamp is cold": the light leaves no trace,
//   which deepens the mystery instead of only repeating it
// - "the logbook holds one new line" replaces "In the logbook, on the
//   last page, one line": plainer, tighter, and "new" makes it present-tense
//   (someone is still writing) so the closing quote lingers longer
const entry =
  "The lighthouse at Grey Point lights itself at dusk. " +
  "No keeper has lived there in forty years. " +
  "By morning the lamp is cold, the stairs are rusted shut, and the logbook holds one new line, " +
  "in handwriting no one recognises: 'I kept the light on for you.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
