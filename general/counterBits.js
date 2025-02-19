var countBits = function (n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    let counter = 0;
    let j = i;
    while (j > 0) {
      counter += j & 1;
      j = j >> 1;
    }

    result[i] = counter;
  }
  return result;
};

console.log(countBits(2)); // [0, 1, 1]
console.log(countBits(5)); // [0, 1, 1, 2, 1, 2]
