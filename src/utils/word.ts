function pascalToSpaced(...s: string[]) {
  const concat = s
    .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
    .join("");

  return (
    concat.charAt(0) +
    concat
      .slice(1)
      .replace(/([A-Z])/g, " $1")
      .toLowerCase()
  );
}

function extractPos(pos: PartOfSpeech[]) {
  const formatedPos = pos.map((p) => {
    if (typeof p == "string") {
      return pascalToSpaced(p);
    } else {
      const key = Object.keys(p).at(0) as string;
      const value = Object.values(p).at(0);

      if (typeof value == "string") {
        if (value == "Normal") {
          return pascalToSpaced(key);
        } else {
          return pascalToSpaced(value, key);
        }
      } else {
        const innerkey = Object.keys(value).at(0) as string;
        const innerValue = Object.values(value).at(0) as string;

        return pascalToSpaced(innerkey, key, innerValue);
      }
    }
  });

  return formatedPos.join(", ");
}

export { pascalToSpaced, extractPos };
