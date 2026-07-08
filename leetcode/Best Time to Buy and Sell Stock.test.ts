import { test, expect, describe } from 'bun:test';

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function maxProfit(prices: number[]): number {
  if (prices.length === 1) {
    return 0;
  }
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] - prices[j] < max) {
        max = prices[i] - prices[j];
      }
    }
  }
  return 0 - max;
}

function maxProfit1(prices: number[]): number {
  if (prices.length === 1) {
    return 0;
  }

  let min = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }

  return max;
}

describe('math operations', () => {
  test('123', () => {
    const result = maxProfit1([7, 1, 5, 3, 6, 4]);
    expect(result).toEqual(5);
  });
  test('123', () => {
    const result = maxProfit1([7, 6, 4, 3, 1]);
    expect(result).toEqual(0);
  });
  test('123', () => {
    const result = maxProfit1([2]);
    expect(result).toEqual(0);
  });
  test('123', () => {
    const result = maxProfit1([0, 6, 4, 3, 1]);
    expect(result).toEqual(6);

    //1k 10k 100 0 1 99 1 9,99k
  });
});

function isPalindrome(s: string): boolean {
  let xs = s.replace(/[^a-zA-Z0-9]/g, "");
  let xsl = xs.length;
      if(xsl <=1) {
      return true
  }
  let i = 0;
  while (i < ((xsl / 2) | 0)) {
      if (xs[i] !== xs[xsl - 1 - i]) {
          return false;
      }
      i++;
  }
  return true;
};