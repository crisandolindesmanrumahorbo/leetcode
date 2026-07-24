import { test, expect, describe } from 'bun:test';

//https://leetcode.com/problems/valid-parentheses/description/
//'(', ')', '{', '}', '[' and ']'
function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }
  let temp = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      temp.push(s[i]);
    } else {
      if (temp.length === 0) {
        return false;
      }
      if (
        (s[i] === ')' && temp[temp.length - 1] === '(') ||
        (s[i] === ']' && temp[temp.length - 1] === '[') ||
        (s[i] === '}' && temp[temp.length - 1] === '{')
      ) {
        temp.pop();
      } else {
        return false;
      }
    }
    i++;
  }
  if (temp.length > 0) {
    return false;
  }
  return true;
}

describe('twoSum', () => {
  test('1', () => {
    const result = isValid('()');
    expect(result).toEqual(true);
  });
  test('2', () => {
    const result = isValid('()[]{}');
    expect(result).toEqual(true);
  });
  test('3', () => {
    const result = isValid('(]');
    expect(result).toEqual(false);
  });
  test('4', () => {
    const result = isValid('([])');
    expect(result).toEqual(true);
  });
  test('5', () => {
    const result = isValid('([)]');
    expect(result).toEqual(false);
  });
  test('6', () => {
    const result = isValid('(({');
    expect(result).toEqual(false);
  });
});
