function findMissingNumber(arr: Array<number>): number {
  //PA => (n*(n+1))/2

  //Considerando que está faltando um elemento incremento +1
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;

  let sum = 0;
  for (const a of arr) {
    sum += a;
  }
  return total - sum;
}

const missing = findMissingNumber([1, 2, 4, 5, 6, 7, 8]);
console.log("missing ", missing);
