import { test, expect, describe } from 'bun:test';

// Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
// Output: 45

function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): number {
  const r1 = (ax2 - ax1) * (ay2 - ay1);
  const r2 = (bx2 - bx1) * (by2 - by1);
  const axMax = Math.max(ax2, ax1);
  const axMin = Math.min(ax2, ax1);
  const bxMin = Math.min(bx1, bx2);
  const bxMax = Math.max(bx1, bx2);
  const byMax = Math.max(by1, by2);
  const byMin = Math.min(by1, by2);
  const ayMin = Math.min(ay1, ay2);
  const ayMax = Math.max(ay1, ay2);
  console.log({ ax1, ax2, axMax, axMin });
  console.log({ bx1, bx2, bxMin, bxMax });
  console.log({ by1, by2, byMax, byMin });
  console.log({ ay1, ay2, ayMin, ayMax });
  const axCol = axMax > bxMin && ax2 - ax1 !== 0 && axMin < bxMax;
  let xCol = 0;
  if (axCol) {
    if (axMin < bxMin && axMax > bxMax) {
      xCol = bxMax - bxMin;
    } else {
      xCol = axMax - bxMin;
    }
  }
  const byCol = byMax > ayMin && by1 - by2 !== 0 && byMin < ayMax;
  let yCol = 0;
  if (byCol) {
    if (byMin > ayMin && byMax < ayMax) {
      yCol = byMax - byMin;
    } else {
      yCol = ayMax - byMin;
    }
  }
  console.log({ xCol, yCol, r1, r2 });

  return r1 + r2 - xCol * yCol;
}

function computeArea1(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): number {
  const xOverlap = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  const yOverlap = Math.min(ay2, by2) - Math.max(ay1, by1);
  
  const overlap = Math.max(0, xOverlap) * Math.max(0, yOverlap);
  
  return (ax2 - ax1) * (ay2 - ay1) +
         (bx2 - bx1) * (by2 - by1) -
         overlap;
}

// Example 2:

// Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
// Output: 16

describe('computeArea', () => {
  test('1', () => {
    const result = computeArea1(-3, 0, 3, 4, 0, -1, 9, 2);
    expect(result).toEqual(45);
  });
  test('2', () => {
    const result = computeArea1(-2, -2, 2, 2, -2, -2, 2, 2);
    expect(result).toEqual(16);
  });
  test('3', () => {
    const result = computeArea1(0, 0, 0, 0, -1, -1, 1, 1);
    expect(result).toEqual(4);
  });
  test('3', () => {
    const result = computeArea1(-2, -2, 2, 2, -4, 3, -3, 4);
    expect(result).toEqual(17);
  });
  test('3', () => {
    const result = computeArea1(-2, -2, 2, 2, -1, -1, 1, 1);
    expect(result).toEqual(16);
  });
  test('3', () => {
    const result = computeArea1(-2, -2, 2, 2, 1, 1, 3, 3);
    expect(result).toEqual(19);
  });
});
