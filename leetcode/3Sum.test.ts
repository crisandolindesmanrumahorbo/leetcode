import { test, expect, describe } from 'bun:test';

// https://leetcode.com/problems/3sum/description/?envType=problem-list-v2&envId=array
// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

function threeSum(nums: number[]): number[][] {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
}

// timelimit need perfomance
function threeSum2(nums: number[]): number[][] {
  let result = new Set<string>();
  let arr = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let max = Math.max(nums[i], Math.max(nums[j], nums[k]));
          let min = Math.min(nums[i], Math.min(nums[j], nums[k]));
          let mid = nums[i] + nums[j] + nums[k] - max - min;
          if (!result.has(`${max}${min}${mid}`)) {
            result.add(`${max}${min}${mid}`);
            arr.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
  }
  return arr;
}

function threeSum3(nums: number[]): number[][] {
  let map = new Map<number, number>();
  let result = new Set<string>();
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let needFind = 0 - nums[i] - nums[j];
      let find = map.get(needFind);
      if (find !== undefined && find !== i && find !== j) {
        let max = Math.max(nums[i], Math.max(nums[j], needFind));
        let min = Math.min(nums[i], Math.min(nums[j], needFind));
        let mid = nums[i] + nums[j] + needFind - max - min;
        if (!result.has(`${max}${mid}${min}`)) {
          result.add(`${max}${mid}${min}`);
          arr.push([nums[i], nums[j], needFind]);
        }
      }
    }
  }

  return arr;
}

function threeSum4(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const map = new Map<number, number>();
  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      const need = -nums[i] - nums[j];
      const k = map.get(need);

      if (k !== undefined && k > j) {
        result.push([nums[i], nums[j], need]);
      }
    }
  }

  return result;
}

describe('math operations', () => {
  function normalize(arr: number[][]) {
    return arr
      .map((a) => a.slice().sort((x, y) => x - y))
      .sort((a, b) => a.join(',').localeCompare(b.join(',')));
  }

  test('1', () => {
    const result = threeSum4([-1, 0, 1, 2, -1, -4]);

    expect(normalize(result)).toEqual(
      normalize([
        [-1, -1, 2],
        [-1, 0, 1],
      ])
    );
  });
});
