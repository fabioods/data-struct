function twoSum(nums: number[], target: number) : number[] {
  const map = new Map();
  for (let i = 0; i <nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(nums[i])) {
      return [map.get(nums[i])[0], i];
    }

    map.set(diff, [i]);
  }

  return [];
}

console.log(twoSum([2, 9, 11, 7], 11)); // [0, 1]