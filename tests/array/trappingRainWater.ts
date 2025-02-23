function trapping(arr: Array<number>): number {
  if (!arr) {
    return 0;
  }
  let sum = 0;
  const n = arr.length;

  const leftMax = new Array(n);
  const rightMax = new Array(n);

  leftMax[0] = arr[0];
  rightMax[n - 1] = arr[n - 1];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(arr[i], rightMax[i + 1]);
  }
  console.log("left ", leftMax);
  console.log("rightMax ", rightMax);

  for (let i = 0; i < n; i++) {
    sum += Math.min(leftMax[i], rightMax[i]) - arr[i];
  }
  return sum;
}

const arr1 = [3, 0, 1, 0, 4, 0, 2];

console.log("trapping ", trapping(arr1));
