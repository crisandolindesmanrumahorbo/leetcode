import { test, expect, describe } from 'bun:test';

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

function reverse(y: number): number {
  let x = Math.abs(y);
  let result = 0;
  while (x !== 0) {
    let sisa = x % 10;
    result = result * 10 + sisa;
    x = (x / 10) | 0;
  }
  if (result > 2 ** 31 - 1) {
    return 0;
  }
  return y < 0 ? result * -1 : result;
}

describe('math operations', () => {
  test('123', () => {
    const result = reverse(123);
    expect(result).toEqual(321);
  });
  test('-123', () => {
    const result = reverse(-123);
    expect(result).toEqual(-321);
  });
  test('120', () => {
    const result = reverse(120);
    expect(result).toEqual(21);
  });
  test('1534236469', () => {
    const result = reverse(1534236469);
    expect(result).toEqual(0);
  });
});
