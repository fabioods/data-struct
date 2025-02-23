function maxProduct(arr: Array<number>): number {
  if (!arr) {
    return 0;
  }

  let r = arr[0];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let mult = 1;
    for (let j = i; j < n; j++) {
      mult *= arr[j];
      if (mult > r) {
        r = mult;
      }
    }
  }

  return r;
}

const result = maxProduct([-1, -3, -10, 0, 60]);
console.log("result ", result);
