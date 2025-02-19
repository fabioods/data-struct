var reverseWords = function (s) {
  let output = "";
  let words = "";
  const split = s.split(" ");
  for (const [index, s] of split.entries()) {
    const allWords = s.split("");
    for (let i = allWords.length - 1; i >= 0; i--) {
      words += allWords[i];
    }
    output += words;
    if (index !== split.length - 1) {
      output += " ";
    }
    words = "";
  }
  return output;
};
