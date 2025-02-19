function quickSortWithoutExtras(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [
    ...quickSortWithoutExtras(left),
    pivot,
    ...quickSortWithoutExtras(right),
  ];
}

console.log(quickSortWithoutExtras([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
