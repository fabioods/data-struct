var reverseWords = function (s: string) {
  let output = "";
  let l,
    r = 0;

  const split = s.split(" ");
  for (let s of split) {
    const words = s.split("");

    const reverse = Array.from(words).reverse().join("");
    output += reverse;
    if (s !== split[split.length - 1]) {
      output += " ";
    }
  }
  return output;
};

const input = "Let's take LeetCode contest";
console.log(reverseWords(input))
