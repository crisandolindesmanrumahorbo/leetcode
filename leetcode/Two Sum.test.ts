import { test, expect, describe } from 'bun:test';

function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let find = target - nums[i];
    if (map.get(find) !== undefined && map.get(find) !== i) {
      return [i, map.get(find)!];
    }
  }
  return [];
}

function twoSum2(nums: number[], target: number): number[] {
  nums.sort((a, b) => a - b);
  console.log({nums})
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    let total = nums[i] + nums[j];
    if (total === target) {
      return [i, j];
    }
    if (total > target) {
      j--;
    } else {
      i++;
    }
  }
  return []
}
function twoSum3(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const find = target - nums[i];

    if (map.has(find)) {
      return [map.get(find)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

describe('twoSum', () => {
  test('1', () => {
    let nums = [2, 7, 11, 15];
    const result = twoSum3(nums, 9);
    expect(result).toEqual([0, 1]);
  });
  test('2', () => {
    let nums = [3, 2, 4];
    const result = twoSum3(nums, 6);
    console.log({result})
    expect(result).toEqual([1, 2]);
  });
});
