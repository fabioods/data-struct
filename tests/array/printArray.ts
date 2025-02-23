function printArray(arr: Array<number>, k: number): Array<number> {
  let newArray = new Array<number>();
  let l = arr.length;
  k = k % l; // Garante que k não seja maior que n

  for (let i = l - k; i < l; i++) {
    newArray.push(arr[i]);
  }

  for (let i = 0; i < l - k; i++) {
    newArray.push(arr[i]);
  }

  return newArray;
}

console.log("Result ", printArray([1, 3, 5, 7, 9], 2));
