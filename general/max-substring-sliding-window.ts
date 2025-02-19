function maxLengthSubstring(s: string) {
  let l = 0;
  let r = 0;
  let maxSubString = 1;
  let map = new Map();
  map.set(s[0], 1)

  while (r < s.length-1 ) {
    r+=1
    if (map.has(s[r])){
      map.set(s[r], map.get(s[r])+1)
    } else {
      map.set(s[r], 1)
    }
    console.log("max ", maxSubString, " l ", l, " r ", r)
    console.log("max ", s.slice(l,r+1))
    while (map.get(s[r]) === 3) {
      map.set(s[l], map.get(s[l])-1)
      l += 1
    }
   
    maxSubString = Math.max(maxSubString, r-l+1)
    console.log("new max ", s.slice(l,r+1))
  }
  console.log("maxstring " , s.slice(l,r+1))
  return maxSubString
}

const a = "BCBBBCBA"
console.log("max ", maxLengthSubstring(a))