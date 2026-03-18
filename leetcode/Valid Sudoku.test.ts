import { test, expect, describe } from 'bun:test';

// https://leetcode.com/problems/valid-sudoku/?envType=problem-list-v2&envId=array

function isValidSudoku1(board: string[][]): boolean {
  let result = true;
  const col0 = new Set();
  const col1 = new Set();
  const col2 = new Set();
  const col3 = new Set();
  const col4 = new Set();
  const col5 = new Set();
  const col6 = new Set();
  const col7 = new Set();
  const col8 = new Set();
  const box0 = new Set();
  const box1 = new Set();
  const box2 = new Set();
  const box3 = new Set();
  const box4 = new Set();
  const box5 = new Set();
  const box6 = new Set();
  const box7 = new Set();
  const box8 = new Set();
  for (let i = 0; i < board.length; i++) {
    const row = new Set();
    for (let j = 0; j < board[i].length; j++) {
      let x = board[i][j];
      if (row.has(x)) {
        return false;
      }
      if (x !== '.') {
        row.add(x);
      }
      if (j === 0) {
        if (col0.has(x)) {
          return false;
        }
        if (x !== '.') {
          col0.add(x);
        }
      }
      if (j === 1) {
        if (col1.has(x)) {
          return false;
        }
        if (x !== '.') {
          col1.add(x);
        }
      }
      if (j === 2) {
        if (col2.has(x)) {
          return false;
        }
        if (x !== '.') {
          col2.add(x);
        }
      }
      if (j === 3) {
        if (col3.has(x)) {
          return false;
        }
        if (x !== '.') {
          col3.add(x);
        }
      }
      if (j === 4) {
        if (col4.has(x)) {
          return false;
        }
        if (x !== '.') {
          col4.add(x);
        }
      }
      if (j === 5) {
        if (col5.has(x)) {
          return false;
        }
        if (x !== '.') {
          col5.add(x);
        }
      }
      if (j === 6) {
        if (col6.has(x)) {
          return false;
        }
        if (x !== '.') {
          col6.add(x);
        }
      }
      if (j === 7) {
        if (col7.has(x)) {
          return false;
        }
        if (x !== '.') {
          col7.add(x);
        }
      }
      if (j === 8) {
        if (col8.has(x)) {
          return false;
        }
        if (x !== '.') {
          col8.add(x);
        }
      }

      //box
      if (j < 3 && i < 3) {
        if (box0.has(x)) {
          return false;
        }
        if (x !== '.') {
          box0.add(x);
        }
      } else if (j < 6 && j > 2 && i < 3) {
        if (box1.has(x)) {
          return false;
        }
        if (x !== '.') {
          box1.add(x);
        }
      } else if (j < 9 && j > 5 && i < 3) {
        if (box2.has(x)) {
          return false;
        }
        if (x !== '.') {
          box2.add(x);
        }
      } else if (j < 3 && i < 6) {
        if (box3.has(x)) {
          return false;
        }
        if (x !== '.') {
          box3.add(x);
        }
      } else if (j < 6 && j > 2 && i < 6) {
        if (box4.has(x)) {
          return false;
        }
        if (x !== '.') {
          box4.add(x);
        }
      } else if (j < 9 && j > 5 && i < 6) {
        if (box5.has(x)) {
          return false;
        }
        if (x !== '.') {
          box5.add(x);
        }
      } else if (j < 3 && i < 9) {
        if (box6.has(x)) {
          return false;
        }
        if (x !== '.') {
          box6.add(x);
        }
      } else if (j < 6 && j > 2 && i < 9) {
        if (box7.has(x)) {
          return false;
        }
        if (x !== '.') {
          box7.add(x);
        }
      } else if (j < 9 && j > 5 && i < 9) {
        if (box8.has(x)) {
          return false;
        }
        if (x !== '.') {
          box8.add(x);
        }
      }
    }
  }
  return result;
}

describe('isValidSudoku', () => {
  test('1', () => {
    const result = isValidSudoku1([
      ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ]);
    expect(result).toEqual(true);
  });
  test('2', () => {
    const result = isValidSudoku1([
      ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ]);
    expect(result).toEqual(false);
  });
});
