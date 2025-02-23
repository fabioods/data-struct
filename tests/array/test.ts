function test(arr: Array<number>, k: number): number {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}

const input = [7, 10, 4, 3, 20, 15];

console.log("Result ", test(input, 3));
