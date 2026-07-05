import { test, expect, describe } from 'bun:test';

const is = (code: number) => {
  if (
    (code > 47 && code < 58) ||
    (code > 64 && code < 91) ||
    (code > 96 && code < 123)
  ) {
    return true;
  }
  return false;
};

function isPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    const icode = s.charCodeAt(i);
    const jcode = s.charCodeAt(j);
    // console.log({a:`[${i}]:${s[i]}`, b:`[${j}]:${s[j]}`})

    if (!is(icode)) {
      i++;
      continue;
    }
    if (!is(jcode)) {
      j--;
      continue;
    }
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      // console.log({a:`[${i}]:${s[i]}`, b:`[${j}]:${s[j]}`})
      return false;
    }
    i++;
    j--;
  }
  return true;
}

describe('computeArea', () => {
  test('0', () => {
    const result = isPalindrome('A man, a plan, a canal: Panama');
    expect(result).toEqual(true);
  });
  test('0', () => {
    const result = isPalindrome('race a car');
    expect(result).toEqual(false);
  });
  test('0', () => {
    const result = isPalindrome(' ');
    expect(result).toEqual(true);
  });
  test('1', () => {
    const result = isPalindrome('121');
    expect(result).toEqual(true);
  });
  test('1', () => {
    const result = isPalindrome('-121');
    expect(result).toEqual(true);
  });
  test('1', () => {
    const result = isPalindrome('10');
    expect(result).toEqual(false);
  });
  test('1', () => {
    const result = isPalindrome('0');
    expect(result).toEqual(true);
  });
  test('1', () => {
    const result = isPalindrome('101');
    expect(result).toEqual(true);
  });
});


