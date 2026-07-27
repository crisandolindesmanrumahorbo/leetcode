function singleNumber(nums: number[]): number {
    let mySet = new Set<number>();
    for(let i = 0;i< nums.length;i++) {
      if(mySet.has(nums[i])) {
        mySet.delete(nums[i])
      } else {
        mySet.add(nums[i])
      }
    }
    return mySet.values().next().value!;
  };