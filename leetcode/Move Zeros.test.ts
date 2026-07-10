// https://leetcode.com/problems/move-zeroes/description/?envType=problem-list-v2&envId=array

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 
import { test, expect, describe } from 'bun:test';

function moveZeroes(nums: number[]): Array<number> {
    const len = nums.length;
    const ascending = [...nums].sort((a: number, b: number) => a - b); 
    return ascending
    return [1,3,12,0,0]
};


describe('math operations', () => {

  test('1', () => {
    const result = moveZeroes([0,1,0,3,12]);
    console.log({result})

    expect(result).toEqual([1,3,12,0,0]);
  });
});