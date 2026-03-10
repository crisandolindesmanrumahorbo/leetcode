import { test, expect, describe } from 'bun:test';

// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// ACCEPTED
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  let longest = 1;
  let temp = 0;
  const userMap = new Map<string, string>();
  let i = 0;
  let j = 0;
  while (j < s.length - 1) {
    let a = s.charAt(i + j);
    if (i + j >= s.length) {
      j = j + 1;
      if (temp > longest) {
        longest = temp;
      }
      continue;
    }
    if (!userMap.get(a)) {
      temp = temp + 1;
      userMap.set(a, a);
      i = i + 1;
    } else {
      if (temp > longest) {
        longest = temp;
      }
      userMap.clear();
      temp = 0;
      i = 0;
      j = j + 1;
    }
  }
  return longest;
}

function lengthOfLongestSubstringPerfomance(s: string): number {
  const map = new Map<string, number>();
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (map.has(char) && map.get(char)! >= left) {
      left = map.get(char)! + 1;
    }

    map.set(char, right);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

describe('lengthOfLongestSubstring', () => {
  test('abcabcbb', () => {
    const result = lengthOfLongestSubstring('abcabcbb');
    expect(result).toEqual(3);
  });
  test('bbbbb', () => {
    const result = lengthOfLongestSubstring('bbbbb');
    expect(result).toEqual(1);
  });
  test('pwwkew', () => {
    const result = lengthOfLongestSubstring('pwwkew');
    expect(result).toEqual(3);
  });
  test(' ', () => {
    // whitespace
    const result = lengthOfLongestSubstring(' ');
    expect(result).toEqual(1);
  });
  test('', () => {
    // empty
    const result = lengthOfLongestSubstring('');
    expect(result).toEqual(0);
  });
  test('au', () => {
    // empty
    const result = lengthOfLongestSubstring('au');
    expect(result).toEqual(2);
  });
});
