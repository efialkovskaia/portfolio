const shortWords = [
  "а",
  "без",
  "бы",
  "в",
  "во",
  "до",
  "для",
  "же",
  "за",
  "и",
  "из",
  "к",
  "ко",
  "ли",
  "на",
  "над",
  "не",
  "ни",
  "но",
  "о",
  "об",
  "обо",
  "от",
  "по",
  "под",
  "при",
  "про",
  "с",
  "со",
  "у",
  "через"
].join("|");

const shortWordPattern = new RegExp(
  `(^|[\\s([{«"“„])(${shortWords})(\\s+)`,
  "giu"
);

export function keepShortWords(text: string) {
  return text.replace(shortWordPattern, "$1$2\u00A0");
}
