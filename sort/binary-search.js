function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length;
  let steps = 0;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] === target) {
      console.log("steps", steps);
      steps++;
      return m;
    }

    if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
    steps++;
  }
  console.log("steps", steps);
  return null;
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const c = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];

console.log("Encontrou na posição ", binarySearch(a, 20));
console.log("Encontrou na posição ", binarySearch(b, 20));
console.log("Encontrou na posição ", binarySearch(c, 40));
