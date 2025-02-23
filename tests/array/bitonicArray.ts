function maxBitonicSubarray(arr: Array<number>): number {
  const size = arr.length;
  if (size === 1) return 1;

  const inc = new Array(size).fill(1);
  const desc = new Array(size).fill(1);

  for (let i = 1; i < size; i++) {
    if (arr[i] > arr[i - 1]) {
      inc[i] = inc[i - 1] + 1;
    }
  }

  console.log("inc ", inc);

  for (let i = size - 2; i > 0; i--) {
    if (arr[i] > arr[i + 1]) {
      desc[i] = desc[i + 1] + 1;
    }
  }

  console.log("desc ", desc);
  let max = 1;
  for (let i = 0; i < size; i++) {
    max = Math.max(max, inc[i] + desc[i] - 1);
  }

  return max;
}

// Testes
const arr1 = [12, 4, 78, 90, 45, 23];
console.log(maxBitonicSubarray(arr1)); // Saída: 5

// const arr2 = [20, 4, 1, 2, 3, 4, 2, 10];
// console.log(maxBitonicSubarray(arr2)); // Saída: 5

// const arr3 = [10, 20, 30, 40];
// console.log(maxBitonicSubarray(arr3)); // Saída: 4

// const arr4 = [40, 30, 20, 10];
// console.log(maxBitonicSubarray(arr4)); // Saída: 4
