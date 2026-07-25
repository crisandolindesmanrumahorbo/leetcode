import { test, expect, describe } from 'bun:test';

// C   D     E     U       B
// R  N O   D S   R  M    R O
// I A   L N   M N    A  O
// S      I     A      H

// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
//

type Point = {
  row: number;
  col: number;
  val: string;
};

//https://leetcode.com/problems/zigzag-conversion/description/
function convert(s: string, numRows: number): string {
  let result = [];
  let start = 0;
  let i = 0;
  while (start < s.length) {
    for (let j = 0; j < s.length; j++) {
      const mod = (numRows - 1 - i) * 2;
      let isKelipatan = j % mod === 0;
      if (isKelipatan) {
        // console.log({ i, j });
        result.push(s[j + i]);
      }
    }
    // console.log({ length: result.length });
    start = start + result.length;
    i++;
  }

  return result.toString();
}

function convert2(s: string, numRows: number): string {
  let map = new Map<number, string>();
  let result = '';
  let i = 0;
  while (i < s.length) {
    if ((i % (numRows - 1)) * 2 === 0) {
      map.set(i, s[i]);
    }
    i += 1;
  }
  const sortedEntries = [...map.entries()].sort((a, b) => a[0] - b[0]);
  for (const [_id, role] of sortedEntries) {
    result += role;
  }
  return result;
}

function reverse(s: string, numRows: number): string {
  let x = [];
  let z = (s.length / numRows) | 0; // full col
  let a = 2 * z - 1;
  let index = 0;
  while (index < s.length) {
    let y = [];
    for (let j = 0; j < numRows; j++) {
      y.push(s[j]);
    }
    index++;
  }

  for (let i = 0; i < s.length; i++) {
    let y = [];
    for (let j = 0; j < s.length; j++) {
      y.push(s[j]);
    }
    x.push(y);
  }
  let reverse = x.map((row) => row.reverse()).reverse();
  console.log({ x, reverse });
  return '';
}

function convert3(s: string, numRows: number): string {
  let result = [];
  let start = 0;
  let i = 0;
  while (start < s.length) {
    for (let j = 0; j < s.length; j++) {
      const mod = (numRows - 1) * 2;
      let isKelipatan = j % mod === 0;
      if (isKelipatan) {
        console.log({ i, j });
        result.push(s[i]);
      } else if ((j % numRows) * 2 === 0 && i > 0) {
        console.log('B', { i, j });
        result.push(s[i]);
      }
    }
    // console.log({ length: result.length });
    start = start + result.length;
    i++;
  }

  return result.toString();
}

function convert4(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  let result = [];
  let check = new Set();
  let start = 0;
  let i = 0;
  let j = 0;

  while (start < s.length) {
    j = 0;
    while (j < s.length) {
      let x = (numRows - 1) * 2;
      const isCol = j % x === 0;
      if (isCol) {
        if (j - 2 * i > 0 && i > 0) {
          if (result.length >= s.length) {
            break;
          }
          console.log('===', {
            i,
            j,
            index: j + i - 2 * i,
            char: s[j + i - 2 * i],
          });

          if (!check.has(j + i - 2 * i)) {
            result.push(s[j + i - 2 * i]);
            check.add(j + i - 2 * i);
            console.log({ i, j, char: s[j + i - 2 * i], index: j + i - 2 * i });
          }
        }
        if (!check.has(j + i)) {
          result.push(s[j + i]);
          check.add(j + i);
          console.log({ i, j, char: s[j + i], index: j + i });
        }
      }
      j++;
    }
    start = result.length;
    i++;
  }

  const numberString = result.reduce((acc, curr) => {
    if (curr) {
      return acc + curr;
    }
    return acc;
  }, '');
  return numberString;
}

function convert5(s: string, numRows: number): string {
  if (numRows === 1) return s;

  let result: string[] = [];
  const cycle = 2 * (numRows - 1);

  let i = 0;

  while (i < numRows) {
    let j = 0;

    while (j + i < s.length) {
      //vertical
      result.push(s[j + i]);
      const diag = j + cycle - i;
      if (i !== 0 && i !== numRows - 1 && diag < s.length) {
        //diagonal
        result.push(s[diag]);
      }
      j += cycle;
    }
    i++;
  }

  return result.join("");
}

describe('divide', () => {
  test('123456789, 987654321', () => {
    const result = convert5('PAYPALISHIRING', 3);
    expect(result).toEqual('PAHNAPLSIIGYIR');
  });
  test('123456789, 987654321', () => {
    const result = convert5('PAYPALISHIRING', 4);
    expect(result).toEqual('PINALSIGYAHRPI');
  });
  test('A', () => {
    const result = convert5('AA', 1);
    expect(result).toEqual('AA');
  });
  test('A', () => {
    const result = convert5('ABCD', 3);
    expect(result).toEqual('ABDC');
  });
});
