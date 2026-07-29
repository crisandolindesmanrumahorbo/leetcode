export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function printList(node: ListNode | null) {
  let result = [];
  while (node !== null) {
    // console.log({node})
    result.push(node.val);
    node = node.next;
  }
  console.log(result.join(' -> '));
}
