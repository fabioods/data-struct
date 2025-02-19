function quickSort(array, left, right) {
  if (left < right) {
    const pivotIndex = partition(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

function partition(array, left, right) {
  const pivot = array[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  [array[i + 1], array[right]] = [array[right], array[i + 1]];
  return i + 1;
}

const array = [0, 3, 6, 7, 8, 4, 2, 1, 5];
console.log(quickSort(array, 0, array.length - 1));
