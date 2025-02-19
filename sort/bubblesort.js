function sort(list) {
  const n = list.length;
  let swapped = true;
  for (let i = 0; i < n - 1 && swapped; i++) {
    console.log(`Iteração ${i + 1}`, list);
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
        swapped = true;
      }
    }
  }
}

sort([5, 4, 3, 2, 1]); // [1, 2, 3]
