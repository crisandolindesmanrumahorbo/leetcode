import { test, expect, describe } from 'bun:test';
import { ListNode } from './types';

//https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?envType=problem-list-v2&envId=linked-list

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let curr = head;
  let arr = [];
  while (curr !== null) {
    arr.push(curr.val);

    curr = curr.next;
  }
  arr = arr.toSpliced(arr.length - n, 1);
  if (arr.length === 0) {
    return null;
  }

  let headResult = new ListNode();
  curr = headResult;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      curr.val = arr[i];
    } else {
      if (i === arr.length - 1) {
        curr.next = new ListNode(arr[i]);
        return headResult;
      }
      curr.next = new ListNode(arr[i]);
      curr = curr.next;
    }
  }
  return headResult;
}

describe('removeNthFromEnd', () => {
  test('1', () => {
    let head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    let expected = new ListNode(1);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(3);
    expected.next.next.next = new ListNode(5);

    const result = removeNthFromEnd(head, 2);

    expect(result).toEqual(expected);
  });
  test('2', () => {
    let head = new ListNode(1);

    const result = removeNthFromEnd(head, 1);

    expect(result).toBeNull();
  });
  test('3', () => {
    let head = new ListNode(1);
    head.next = new ListNode(2);
    let expected = new ListNode(1);

    const result = removeNthFromEnd(head, 1);

    expect(result).toEqual(expected);
  });
});
