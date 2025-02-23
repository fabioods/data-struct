function equilibrium(arr: Array<number>): number {
  if (!arr) {
    return -1;
  }
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    let leftSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    let rightSum = 0;
    for (let j = i + 1; j < l; j++) {
      rightSum += arr[j];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

console.log("result ", equilibrium([1, 1, 1, 1]));
