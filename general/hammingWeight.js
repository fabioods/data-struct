function hammingWeight(n) {
  let count = 0;
  while (n) {
    count += n & 1;
    n = n >> 1;
  }
  return count;
}

// 0000 1011 => 3 bits que sao 1
console.log(hammingWeight(11)); // 3
