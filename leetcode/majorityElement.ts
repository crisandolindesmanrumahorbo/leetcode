function majorityElement(nums: number[]): number {
  let need = ((nums.length / 2) | 0) + 1;
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let total = map.get(nums[i])! + 1;
      if (total >= need) {
        return nums[i];
      }
      map.set(nums[i], total);
    } else {
      map.set(nums[i], 0);
    }
  }
  return nums[0];
}

