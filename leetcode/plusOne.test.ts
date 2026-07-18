import { test, expect, describe } from 'bun:test';

// Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
// Output: 45

function plusOne(digits: number[]): number[] {
  let last = digits.length - 1;
  if (digits[last] !== 9) {
    digits[last] = digits[last] + 1;
    return digits;
  }
  let result: Array<number> = [];
  let temp = 0;
  let total = digits[last] + 1;
  while (last >= -1) {
    if (total > 9) {
      // console.log({total})
      result.unshift(total - 10);
      // console.log('after', {result})
      temp = 1;
    } else {
      // console.log('else', {total})
      result.unshift(total);
    }
    if (last === 0 && temp === 0) {
      return result;
    }
    last -= 1;
    total = (digits[last] ?? 0) + temp;
    temp = 0;
  }
  // console.log({ result });
  return result;
}

describe('computeArea', () => {
  test('1', () => {
    const result = plusOne([9, 9]);
    expect(result).toEqual([1, 0, 0]);
  });
  test('1', () => {
    const result = plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
    expect(result).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
  test('2', () => {
    const result = plusOne([9]);
    expect(result).toEqual([1, 0]);
  });
  test('2', () => {
    const result = plusOne([4, 3, 2, 1]);
    expect(result).toEqual([4, 3, 2, 2]);
  });
  test('2', () => {
    const result = plusOne([1, 2, 3]);
    expect(result).toEqual([1, 2, 4]);
  });
  test('2', () => {
    const result = plusOne([0]);
    expect(result).toEqual([1]);
  });
  test('2', () => {
    const result = plusOne([8, 9, 9, 9]);
    expect(result).toEqual([9, 0, 0, 0]);
  });
});
