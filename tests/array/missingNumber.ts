function missingNumbers(arr: number[], brr: number[]): number[] {
  arr.sort((a, b) => a - b);
  brr.sort((a, b) => a - b);

  const missing: number[] = [];
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const counter = map.has(arr[i]) ? map.get(arr[i]) : 0;
    map.set(arr[i], counter + 1);
  }
  console.log("map ", map);

  for (let i = 0; i < brr.length; i++) {
    if (map.has(brr[i])) {
      const counter = map.get(brr[i]) - 1;
      if (counter === 0) {
        map.delete(brr[i]);
        continue;
      }
      map.set(brr[i], counter);
    } else {
      missing.push(brr[i]);
    }
  }
  console.log("new map ", map);

  return missing;
}

const a = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const b = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];

const missing = missingNumbers(a, b);
console.log("missing ", missing);
