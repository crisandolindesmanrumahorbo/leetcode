import { test, expect, describe } from 'bun:test';

// 1,1,2
function removeElement(nums: number[], val: number): number {
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      i++;
      j++;
    } else {
      i++;
    }
  }
  return j;
}

describe('computeArea', () => {
  // test('1', () => {
  //   let nums = [3, 2, 2, 3];
  //   let expected = [2, 2, 2, 3];
  //   const result = removeElement(nums, 3);
  //   expect(result).toEqual(2);
  //   expect(nums).toEqual(expected);
  // });
  test('2', () => {
    let nums = [0, 1, 2, 2, 3, 0, 4, 2];
    let expected = [0, 1, 4, 0, 3, 0, 4, 2];
    const result = removeElement(nums, 2);
    console.log({nums})
    expect(result).toEqual(5);
    expect(nums).toEqual(expected);
  });
});
