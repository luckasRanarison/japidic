function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function normalizePos(pos: string) {
  const posMap: Record<string, string | null> = {
    Keiyoushi: "I",
    Expr: "Expression",
    SoundFx: "Sound effect",
    IkuYuku: "Iku/yuku",
  };

  return posMap[pos] ?? capitalize(pos);
}

function pascalToSpaced(...str: string[]) {
  const spaced = str
    .join("")
    .replace(/(?<!\()([A-Z])/g, " $1")
    .toLowerCase()
    .trim();

  return capitalize(spaced);
}

function getNestedPos(pos: PartOfSpeech): string[] {
  if (typeof pos === "string") {
    return [pos];
  } else {
    const entries = Object.entries(pos);

    if (entries.length > 1) {
      const objectEntries = entries.map(([key, value]) => {
        return { [key]: value };
      });

      return objectEntries.map(getNestedPos).flat();
    } else {
      return [entries[0][0], ...getNestedPos(entries[0][1])];
    }
  }
}

function extractPos(pos: PartOfSpeech[]) {
  const formatedPos = pos.map((p) => {
    const posArray = getNestedPos(p)
      .map(normalizePos)
      .filter((p) => p !== "Normal");

    if (posArray.length < 3) {
      return pascalToSpaced(...posArray.reverse());
    } else {
      return pascalToSpaced(
        posArray[1],
        posArray[0],
        " (" + posArray.at(-1) + ")"
      );
    }
  });

  return formatedPos.join(", ");
}

export { pascalToSpaced, extractPos };
