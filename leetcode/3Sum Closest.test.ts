import { test, expect, describe } from 'bun:test';

// https://leetcode.com/problems/3sum-closest/description/?envType=problem-list-v2&envId=array
// Given an integer array nums of length n and an integer target, find three integers at distinct indices in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// -4 -1 2 1
// 1 2 3 4 5 6 7 8
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// accepted by low perfomnce, good memory
// FINAL
function threeSumClosestInit(nums: number[], target: number): number {
  let closest = null;
  let result = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      for (let k = j + 1; k < nums.length; k++) {
        const total = nums[i] + nums[j] + nums[k];
        const range = total - target;
        if (closest === null || Math.abs(range) < closest) {
          closest = Math.abs(range);
          result = total;
        }
      }
    }
  }
  return result;
}

// FAILED
function threeSumClosest2(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let result = null;
  let i = 0;
  let j = nums.length - 1;
  let closest = 0;
  while (i < j - 1) {
    let total = nums[i] + nums[j - 1] + nums[j];
    const range = total - target;
    // console.log({
    //   a: `${i}:${nums[i]}`,
    //   b: `${i + 1}:${nums[i + 1]}`,
    //   c: `${j}:${nums[j]}`,
    //   total,
    //   range,
    // });
    if (result === null) {
      closest = Math.abs(range);
      result = total;
    } else if (Math.abs(range) < closest) {
      closest = Math.abs(range);
      result = total;
    }
    if (total > target) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return result;
}

// FAILED
function threeSumClosest3(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let result = null
  let closest = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = i+1;
    let k = nums.length - 1;
    while (j < k) {
      let total = nums[i] + nums[j] + nums[k];
      const range = total - target;

      if (result === null || Math.abs(range) < closest) {
        closest = Math.abs(range);
        result = total;
      }
      if (total > target) {
        k--;
      } else if (total < target) {
        j++;
      } else {
        return result;
      }
    }
  }
  return result;
}

describe('math operations', () => {
  test('1', () => {
    const result = threeSumClosest3([-1, 2, 1, -4], 1);

    expect(result).toEqual(2);
  });
  test('2', () => {
    const result = threeSumClosest3([0, 0, 0], 1);

    expect(result).toEqual(0);
  });
  test('3', () => {
    const result = threeSumClosest3([4, 0, 5, -5, 3, 3, 0, -4, -5], -2);

    expect(result).toEqual(-2);
  });
  test('4', () => {
    const result = threeSumClosest3([-100, -98, -2, -1], -101);

    expect(result).toEqual(-101);
  });
  test('5', () => {
    const result = threeSumClosest3([0, 3, 97, 102, 200], 300);

    expect(result).toEqual(300);
  });
});
