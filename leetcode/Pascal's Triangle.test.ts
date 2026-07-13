import { test, expect, describe } from 'bun:test';

function generate(numRows: number): number[][] {
  let result: Array<Array<number>> = [];
  let arr: Array<number> = [];
  for (let i = 0; i < numRows; i++) {
    arr = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        arr.push(1);
      } else {
        arr.push(result[i-1][j-1] + result[i-1][j]);
      }
    }
    result.push(arr);
  }
  return result;
}

function generate2(numRows: number): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1);

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row[j] = 1;
      } else {
        row[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }

    result.push(row);
  }

  return result;
}

describe('computeArea', () => {
  test('1', () => {
    const result = generate2(5);
    expect(result).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });
  test('1', () => {
    const result = generate2(1);
    expect(result).toEqual([[1]]);
  });
});
