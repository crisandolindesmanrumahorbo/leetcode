import { test, expect, describe } from 'bun:test';

//https://leetcode.com/problems/multiply-strings/description/
function multiply(num1: string, num2: string): string {
  const n1 = BigInt(num1);
  const n2 = BigInt(num2);
  const result = n1 * n2;
  return result.toString();
}

describe('divide', () => {
  test('123456789, 987654321', () => {
    const result = multiply('123456789', '987654321');
    expect(result).toEqual('121932631112635269');
  });
});
