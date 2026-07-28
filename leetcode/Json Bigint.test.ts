// transformOrderIdBigInt.test.ts

import { test, expect, describe } from 'bun:test';
const transformOrderIdBigInt = (data: string) => {
  const json = data.replace(
    /"order_id":\s*(\d+)/g,
    `"order_id":"$1"`
  );

  return JSON.parse(json);
};

describe('transformOrderIdBigInt', () => {
  test('should convert bigint order_id to string (real backend payload)', () => {
    const input = `{
      "order_id": 12345678901234567890,
      "name": "test"
    }`;

    const result = transformOrderIdBigInt(input);

    expect(result.order_id).toBe("12345678901234567890");
    expect(typeof result.order_id).toBe("string");
  });

  test('should not touch normal numbers', () => {
    const input = `{
      "order_id": 12345678901234567890,
      "amount": 100
    }`;

    const result = transformOrderIdBigInt(input);

    expect(result.amount).toBe(100);
    expect(typeof result.amount).toBe("number");
  });

  test('should handle nested structure', () => {
    const input = `{
      "data": {
        "order_id": 12345678901234567890
      }
    }`;

    const result = transformOrderIdBigInt(input);

    expect(result.data.order_id).toBe("12345678901234567890");
  });

  test('should handle multiple occurrences', () => {
    const input = `[
      { "order_id": 12345678901234567890 },
      { "order_id": 99999999999999999999 }
    ]`;

    const result = transformOrderIdBigInt(input);

    expect(result[0].order_id).toBe("12345678901234567890");
    expect(result[1].order_id).toBe("99999999999999999999");
  });

  test('should not break when order_id is missing', () => {
    const input = `{
      "id": 123
    }`;

    const result = transformOrderIdBigInt(input);

    expect(result.id).toBe(123);
  });
});