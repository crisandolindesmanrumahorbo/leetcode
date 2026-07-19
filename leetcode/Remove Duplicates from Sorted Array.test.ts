import { test, expect, describe } from 'bun:test';

// 1,1,2
function removeDuplicates(nums: number[]): number {
  let i = 1;
  let j = 1;
  while (i < nums.length) {
    if (nums[i] === nums[i - 1]) {
      i++;
    } else {
      nums[j] = nums[i];
      j++;
      i++;
    }
  }
  return j;
}

describe('computeArea', () => {
  test('1', () => {
    let nums = [1, 1, 2];
    let expected = [1, 2, 2];
    const result = removeDuplicates(nums);
    expect(result).toEqual(2);
    expect(nums).toEqual(expected);
  });
  test('2', () => {
    let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    let expected = [0, 1, 2, 3, 4, 2, 2, 3, 3, 4];
    const result = removeDuplicates(nums);
    expect(result).toEqual(5);
    expect(nums).toEqual(expected);
  });
});
