export const removeUndefinedWord = (text: string): string => {
  let result = "";
  let word = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === " " || char === "\n" || char === "\t") {
      if (word !== "undefined") {
        result += word;
      }
      result += char;
      word = "";
    } else {
      word += char;
    }
  }

  // Trata a última palavra (caso o texto não termine com espaço)
  if (word !== "undefined") {
    result += word;
  }

  return result;
};
