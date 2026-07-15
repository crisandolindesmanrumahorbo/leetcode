import { test, expect, describe } from 'bun:test';

function strStr(haystack: string, needle: string): number {
  let i = 0;
  while (i < haystack.length - needle.length + 1) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
    i++;
  }
  return -1;
}

describe('math operations', () => {
  test('123', () => {
    const result = strStr('sadbutsad', 'sad');
    expect(result).toEqual(0);
  });
  test('123', () => {
    const result = strStr('leetcode', 'leeto');
    expect(result).toEqual(-1);
  });
  test('123', () => {
    const result = strStr('leetcode', 'l');
    expect(result).toEqual(0);
  });
  test('123', () => {
    const result = strStr('leetcode', 'e');
    expect(result).toEqual(1);
  });
  test('123', () => {
    const result = strStr('a', 'a');
    expect(result).toEqual(0);
  });
  test('123', () => {
    const result = strStr('a', 'b');
    expect(result).toEqual(-1);
  });
  test('123', () => {
    const result = strStr('b', 'aa');
    expect(result).toEqual(-1);
  });
  test('123', () => {
    const result = strStr('abc', 'c');
    expect(result).toEqual(2);
  });
});
