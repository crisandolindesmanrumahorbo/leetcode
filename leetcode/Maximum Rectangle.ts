import { test, expect, describe } from 'bun:test';

function maximalRectangle(matrix: string[][]): number {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      let total = 0;
      let val = matrix[i][j];
      
    }
  }
  return max;
}

describe('findTheDifference', () => {
  test('1', () => {
    const result = maximalRectangle([
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0'],
    ]);
    expect(result).toEqual(6);
  });
});
