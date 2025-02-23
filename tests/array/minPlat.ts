function minPlat(arr1: Array<number>, arr2: Array<number>): number {
  arr1.sort((x, y) => x - y);
  arr2.sort((x, y) => x - y);

  let max = 0;
  let count = 0;
  let j = 0;

  for (let i = 0; i < arr1.length; i++) {
    console.log("count ", count);
    const arrived = arr1[i];

    while (arrived > arr2[j]) {
      count--;
      j++;
    }

    count++;
    max = Math.max(max, count);
  }
  return max;
}

console.log("Result ", minPlat([1, 5], [3, 7]));
