import { test, expect, describe } from 'bun:test';

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let xs = x.toString();
  let xsl = xs.length;
  let i = 0;
  // console.log({ max });
  while (i < ((xsl / 2) | 0)) {
    // console.log({ i, left: xs[i], right: xs[xsl - 1 - i] });
    if (xs[i] !== xs[xsl - 1 - i]) {
      return false;
    }
    i++;
  }
  return true;
}

function kthPalindrome(queries: number[], intLength: number): number[] {
  let start = 10 ** (intLength - 1);
  let i = 0;
  let result = [];

  while (result.length < Math.max(...queries)) {
    let x = start + i;
    if (isPalindrome(x)) {
      result.push(x);
    }
    i++;
  }
  console.log({ result });
  return queries.map((i) => (result[i - 1] ? result[i - 1] : -1));
}

function kthPalindrome2(queries: number[], intLength: number): number[] {
  //3 -> 11
  // 4 -> 110
  // let c = 11 * 10 ** (intLength - 3);
  //110
  // 220
  let a = 10 ** (intLength - 3);
  let result: Array<number> = [];
  let i = 0;
  while (i < queries.length) {
    let b = queries[i] - 1;
    if (intLength === 1) {
      if (b > 9) {
        result.push(-1);
      } else {
        result.push(queries[i]);
      }
    } else {
      let start = (((b / 10) | 0) + 1) * 10 ** (intLength - 1);
      console.log({ start });

      let x;
      if (b % 10 === 0) {
        x = ((b / 10) | 0) + 1 + start;
      } else {
        // 1 + 1000 + 1000 + 110
        // 1+1+1000+ 11*11*10 = 121
        // 1 + 1 + 100 + 11
        x = ((b / 10) | 0) + 1 + start + (b % 10 | 0) * 11 * a;
      }
      result.push(x);
    }

    i++;
  }

  return result;
}

function kthPalindrome3(queries: number[], intLength: number): number[] {
  // 3 -> 10 11
  // 4 -> 110 11^i-3 *10
  //3 -> 11
  // 4 -> 110
  // let c = 11 * 10 ** (intLength - 3);
  //110
  // 220
  // let a = 10 ** (intLength - 3); // ->110
  let result: Array<number> = [];
  let i = 0;
  while (i < queries.length) {
    let b = queries[i] - 1;
    if (queries[i] > 10 ** intLength) {
      // console.log({queries: queries[i]})
      result.push(-1);
    } else if (intLength === 1) {
      result.push(queries[i]);
    } else if (intLength === 2) {
      result.push(queries[i] * 11);
    } else {
      let start = (((b / 10) | 0) + 1) * 10 ** (intLength - 1);
      let x;
      if (b % 10 === 0) {
        x = ((b / 10) | 0) + 1 + start;
      } else {
        // 1 + 1000 + 1000 + 110
        // 1+1+1000+ 11*11*10 = 121
        // 0 + 1 + 100 + 11
        x =
          ((b / 10) | 0) +
          1 +
          start +
          (b % 10 | 0) * 11 ** (intLength - 3) * 10;
      }
      result.push(x);
    }

    i++;
  }

  return result;
}

// Example 2:

// Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
// Output: 16

describe('computeArea', () => {
  test('1', () => {
    const result = kthPalindrome3([1, 2, 3, 4, 5, 90], 3);
    // console.log({ result });
    expect(result).toEqual([101, 111, 121, 131, 141, 999]);
  });
  test('2', () => {
    const result = kthPalindrome3([2, 4, 6], 4);
    // console.log({ result });
    expect(result).toEqual([1111, 1331, 1551]);
  });
  test('3', () => {
    const result = kthPalindrome3(
      [2, 201429812, 8, 520498110, 492711727, 339882032, 462074369, 9, 7, 6],
      1
    );
    // console.log({ result });
    expect(result).toEqual([2, -1, 8, -1, -1, -1, -1, 9, 7, 6]);
  });
  test('4', () => {
    const result = kthPalindrome3(
      [
        392015495, 5, 4, 1, 425320571, 565971690, 3, 7, 6, 3, 506222280,
        468075092, 5,
      ],
      2
    );
    // console.log({ result });
    expect(result).toEqual([
      -1, 55, 44, 11, -1, -1, 33, 77, 66, 33, -1, -1, 55,
    ]);
  });
  test('5', () => {
    const result = kthPalindrome3(
      [449229674, 501930675, 40059525, 908875541, 9, 672504016],

      5
    );
    console.log({ result });
    expect(result).toEqual([-1, -1, -1, -1, 10801, -1]);
  });
  // test('1', () => {
  //   const result = kthPalindrome3([1, 2, 3, 4, 5,10,11, 90], 4);
  //   console.log({ result });
  //   expect(result).toEqual([101, 111, 121, 131, 141, 999]);

  // });
  // test('1', () => {
  //   const result = kthPalindrome2([1, 2, 3, 4, 5, 11, 12], 4);
  //   console.log({ result });
  //   expect(result).toEqual([101, 111, 121, 131, 141, 9999]);
  // });
  test('1', () => {
    const result = kthPalindrome3([1, 2, 3, 4, 5,10,11, 90], 5);
    console.log({ result });
    expect(result).toEqual([101, 111, 121, 131, 141, 999]);
  });

  // result: [
  //   10001, 10101, 10201, 10301, 10401, 10501, 10601, 10701, 10801, 10901, 11011,
  //   11111, 11211, 11311, 11411, 11511, 11611, 11711, 11811, 11911, 12021, 12121, 12221,
  //   12321, 12421, 12521, 12621, 12721, 12821, 12921, 13031, 13131, 13231, 13331, 13431,
  //   13531, 13631, 13731, 13831, 13931, 14041, 14141, 14241, 14341, 14441, 14541, 14641,
  //   14741, 14841, 14941, 15051, 15151, 15251, 15351, 15451, 15551, 15651, 15751, 15851,
  //   15951, 16061, 16161, 16261, 16361, 16461, 16561, 16661, 16761, 16861, 16961, 17071,
  //   17171, 17271, 17371, 17471, 17571, 17671, 17771, 17871, 17971, 18081, 18181, 18281,
  //   18381, 18481, 18581, 18681, 18781, 18881, 18981
  // ],
  test('1', () => {
    const result = kthPalindrome([1, 2, 3, 4, 5,10,11, 90], 5);
    console.log({ result });
    expect(result).toEqual([101, 111, 121, 131, 141, 999]);
  });
  test('2', () => {
    const result = kthPalindrome([1, 2, 3, 4, 5,10,11, 90], 5);
    console.log({ result });
    expect(result).toEqual([101, 111, 121, 131, 141, 999]);
  });
});
