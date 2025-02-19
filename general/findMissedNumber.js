function numberOfSteps(num) {
  let steps = 0;
  while (num > 0) {
    if (num & 1) {
      num--;
    } else {
      num >>= 1;
    }
    steps++;
  }
  return steps;
}

console.log(numberOfSteps(2)); // 2

console.log(numberOfSteps(5)); // 2
