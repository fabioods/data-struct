var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // Verifica se o número já foi visto E se a diferença entre índices é <= k
    if (map.has(nums[i]) && Math.abs(i - map.get(nums[i]) <= k)) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

const nums = [1, 2, 3, 1];
const k = 3;
console.log(containsNearbyDuplicate(nums, k)); // true
