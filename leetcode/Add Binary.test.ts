import { test, expect, describe } from 'bun:test';

// 1,1,2
function addBinary(a: string, b: string): string {
  let i = 0;
  let temp = 0;
  let result = '';
  while (true) {
    result += a[i];
    i++;
  }
}

describe('addBinary', () => {
  test('1', () => {
    const result = addBinary('11', '1');
    expect(result).toEqual('100');
  });
  test('2', () => {
    const result = addBinary('1010', '1011');
    expect(result).toEqual('10101');
  });
});
