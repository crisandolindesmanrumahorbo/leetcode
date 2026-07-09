import { test, expect, describe } from 'bun:test';

function findTheDifference(s: string, t: string): string {
  let total = 0;
  for (let i = 0; i < t.length; i++) {
    total = total + t.charCodeAt(i) - (s.charCodeAt(i) || 0);
  }
  return String.fromCharCode(total);
}

describe('findTheDifference', () => {
  test('1', () => {
    const result = findTheDifference('abcd', 'abcde');
    expect(result).toEqual('e');
  });
  test('2', () => {
    const result = findTheDifference('', 'y');
    expect(result).toEqual('y');
  });
});
