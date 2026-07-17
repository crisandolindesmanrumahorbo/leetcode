import { test, expect, describe } from 'bun:test';

// 4361

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let xs = x.toString();
  let xsl = xs.length;
  let i = 0;
  // console.log({ max });
  while (i < ((xsl / 2) | 0)) {
    // console.log({ i, left: xs[i], right: xs[xsl - 1 - i] });
    if (xs[i] !== xs[xsl - 1 - i]) {
      return false;
    }
    i++;
  }
  return true;
}

// Example 2:

// Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
// Output: 16

describe('computeArea', () => {
  test('1', () => {
    const result = isPalindrome(121);
    expect(result).toEqual(true);
  });
  test('1', () => {
    const result = isPalindrome(-121);
    expect(result).toEqual(false);
  });
  test('1', () => {
    const result = isPalindrome(10);
    expect(result).toEqual(false);
  });
  test('1', () => {
    const result = isPalindrome(0);
    expect(result).toEqual(true);
  });
  test('1', () => {
    const result = isPalindrome(101);
    expect(result).toEqual(true);
  });
});
