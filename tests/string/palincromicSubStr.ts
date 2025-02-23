function palindromicStr(s: string): string {
  if (!s) return "";
  let longest = "";

  const palindromicCenter = (left: number, right: number): string => {
    console.log("\nleft ", left, " right ", right);
    while (left >= 0 && right < size && s[left] === s[right]) {
      console.log("left ", s[left], left);
      console.log("right ", s[right], right);
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };

  const size = s.length;
  for (let i = 0; i < size; i++) {
    const odd = palindromicCenter(i, i);
    if (odd.length > longest.length) {
      longest = odd;
    }
    console.log("\nodd ", odd);

    const even = palindromicCenter(i, i + 1);
    if (even.length > longest.length) {
      longest = even;
    }
    console.log("even ", even);
  }

  return longest;
}

const result = palindromicStr("afaaf");
console.log("result ", result);
