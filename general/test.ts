// quick sort

function quickSort(arr: Array<number>, left: number, right: number ) {
  if(left < right) {
    const partitionIndex = partition(arr,left,right);
    quickSort(arr, left, partitionIndex-1);
    quickSort(arr, partitionIndex+1, right)
  }
  return arr;
}

function partition(arr: Array<number>, left: number, right: number ) {
  const pivot = array[right];
  let i = left
  for(let j = left; j < right; j++) {
    if(arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]]
  return i;
}




const array = [5,6,2,1,0,9,10];
console.log(quickSort(array, 0, array.length - 1));