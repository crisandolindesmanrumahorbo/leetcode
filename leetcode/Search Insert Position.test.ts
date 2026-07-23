import { test, expect, describe } from 'bun:test';

//https://leetcode.com/problems/search-insert-position/?envType=problem-list-v2&envId=array
function searchInsert(nums: number[], target: number): number {
  if (nums[0] > target) {
    return 0;
  }
  let i = 0;
  let wouldbe = 0;
  let temp = 10000;
  while (i < nums.length) {
    if (target === nums[i]) {
      return i;
    }
    if(nums[i] > target) {
      return wouldbe + 1
    }
    // console.log({hitung:Math.abs(target - nums[i])})
    let cal = Math.abs(target - nums[i]);
    if (cal < temp) {
      // console.log({i})
      wouldbe = i;
      temp = cal;
    }
    i++;
  }
  return wouldbe + 1;
}

describe('twoSum', () => {
  test('1', () => {
    let nums = [1, 3, 5, 6];
    const result = searchInsert(nums, 5);
    expect(result).toEqual(2);
  });
  test('2', () => {
    let nums = [1, 3, 5, 6];
    const result = searchInsert(nums, 2);
    expect(result).toEqual(1);
  });
  test('3', () => {
    let nums = [1, 3, 5, 6];
    const result = searchInsert(nums, 7);
    expect(result).toEqual(4);
  });
  test('4', () => {
    let nums = [-3, -1, 5, 6];
    const result = searchInsert(nums, 2);
    expect(result).toEqual(2);
  });
  test('5', () => {
    let nums = [1, 3, 5, 6];
    const result = searchInsert(nums, 0);
    expect(result).toEqual(0);
  });
  test('6', () => {
    let nums = [3, 6, 7, 8, 10];
    const result = searchInsert(nums, 5);
    expect(result).toEqual(1);
  });
});
