import { test, expect, describe } from 'bun:test';
import { ListNode, printList } from './types';

//https://leetcode.com/problems/valid-parentheses/description/
//'(', ')', '{', '}', '[' and ']'
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let last = null;
  let result: ListNode = new ListNode();
  let x = result;
  while (true) {
    console.log({ val: head.val });
    console.log({ last });
    if (last === null) {
      last = head.val;
      result.val = head.val;
      // console.log({ result });
    } else if (last === head.val) {
      // console.log('continue')
      head = head.next;
      continue;
    } else {
      // last = head.val
      x.val = head.val;
    }
    head = head.next;
    if (head === null) {
      break;
    }
    x.next = new ListNode();
    x = x.next;

    // console.log('next')
  }
  return result;
}

function deleteDuplicates1(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let last = head.val;
  let result: ListNode = new ListNode(head.val);
  let x = result;
  while (head !== null) {
    if (last !== head.val) {
      x.next = new ListNode(head.val);
      x = x.next;
      last = head.val
    }
    head = head.next
  }
  return result;
}
describe('deleteDuplicates', () => {
  test('1', () => {
    let head = new ListNode(1);
    head.next = new ListNode(1);
    head.next.next = new ListNode(2);
    let expected = new ListNode(1);
    expected.next = new ListNode(2);

    const result = deleteDuplicates(head);

    expect(result).toEqual(expected);
  });

  test('2', () => {
    let head = new ListNode(1);
    head.next = new ListNode(1);
    head.next.next = new ListNode(2);
    head.next.next.next = new ListNode(3);
    head.next.next.next.next = new ListNode(3);
    let expected = new ListNode(1);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(3);

    const result = deleteDuplicates1(head);
    console.log(printList(result));

    expect(result).toEqual(expected);
  });
});
