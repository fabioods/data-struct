function maxSubArraySum(arr: Array<number>): number {
  if (!arr) {
    return 0;
  }

  let l = 0;
  let r = 0;
  let maxSum = arr[0];
  let currentSum = arr[0];

  while (r < arr.length) {
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    r++;
    if (r < arr.length) {
      currentSum += arr[r];
    }

    if (currentSum < 0) {
      currentSum = 0;
      l = r;
    }
  }
  return maxSum;
}

function maxSubArraySumFor(arr: Array<number>): number {
  if (!arr) {
    return 0;
  }
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

function kadeneAlg(arr: Array<number>): number {
  if (!arr) {
    return 0;
  }
  let currentSum = 0;
  let max = -Infinity;
  for (const a of arr) {
    currentSum += a;
    if (currentSum > max) {
      max = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return max;
}

const arr = [2, 3, -6, 7, -1, 2, 3];
const output = maxSubArraySum(arr);
const output1 = maxSubArraySumFor(arr);
const output2 = kadeneAlg(arr);
console.log("output ", output);
console.log("output 1 ", output1);
console.log("output 2 ", output2);
