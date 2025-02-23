function leader(arr: Array<number>): number[] {
  if (!arr) {
    return [];
  }
  const l = arr.length;
  let leaders = [];
  for (let i = 0; i < l; i++) {
    const element = arr[i];
    let greater = true;
    for (let j = i; j < l; j++) {
      if (element < arr[j]) {
        greater = false;
      }
    }
    if (greater) {
      leaders.push(element);
    }
  }

  return leaders;
}

console.log("result ", leader([16, 17, 4, 3, 5, 2]));
