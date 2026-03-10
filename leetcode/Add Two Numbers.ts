class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const reverseLinkedList = (head: ListNode) => {
  let curr = head;
  let prev = null;
  let next;

  while (curr !== null) {
    next = curr.next;

    curr.next = prev;

    prev = curr;
    curr = next;
  }
  return prev;
};

function printList(node: ListNode | null) {
  let result = [];
  while (node !== null) {
    // console.log({node})
    result.push(node.val);
    node = node.next;
  }
  console.log(result.join(' -> '));
}

// CARA 1 masih error
function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
  let r1 = reverseLinkedList(l1);
  let r2 = reverseLinkedList(l2);
  let curr1 = r1;
  let curr2 = r2;
  let head: ListNode = new ListNode(0);
  let current = head;
  let temp = 0;
  let i = 0;

  while (curr1 !== null) {
    let total = (curr1?.val ?? 0) + (curr2?.val ?? 0) + temp;
    console.log(`${i}: ${curr1?.val ?? 0} +  ${curr2?.val ?? 0} + ${temp}`);
    console.log(`masuk ${current.val}`);

    if (i === 0) {
      if (total - 10 >= 0) {
        head.val = total - 10;
        temp = 1;
      } else {
        head.val = total;
        temp = 0;
      }
    } else {
      if (total - 10 >= 0) {
        current.next = new ListNode(total - 10);
        temp = 1;
      } else {
        current.next = new ListNode(total);
        temp = 0;
      }
      current = current.next;
    }

    curr1 = curr1.next;
    curr2 = curr2?.next ?? null;
    i = i + 1;
  }
  return head;
}

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

let head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(3);

let head2 = new ListNode(5);
head2.next = new ListNode(6);
head2.next.next = new ListNode(4);

// const result = addTwoNumbers(head, head2);
// console.log(printList(reverseLinkedList(result)));

//CARA 2 -> work tp kena number validation
// reverse -> generate numbernya krn bisa pake 10^
// total
// 123

// linkedlist -> array
// reverse array

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
  const total = getNumber(l1) + getNumber(l2);
  return toLinkedList(total);
}

const getNumber = (head: ListNode) => {
  let reversed = reverseLinkedList(head);
  let curr = reversed;
  let next;
  let number = 0;
  while (curr !== null) {
    console.log('curr', curr.val);
    number = number * 10 + curr.val;
    console.log({ number });
    curr = curr.next;
  }
  return number;
};

const toLinkedList = (value: number) => {
  let temp = value;
  let head: ListNode = new ListNode(0);
  let result = head;
  let i = 0;
  while (temp !== 0) {
    let sisa = temp % 10;
    if (i === 0) {
      result.val = sisa;
    } else {
      result.next = new ListNode(sisa);
      result = result.next;
    }
    temp = Math.floor(temp / 10);
    i = i + 1;
  }
  return head;
};

//CARA 3 kembali pake
// [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

let head3 = new ListNode(9);
head3.next = new ListNode(9);
head3.next.next = new ListNode(9);
head3.next.next.next = new ListNode(9);
head3.next.next.next.next = new ListNode(9);
head3.next.next.next.next.next = new ListNode(9);
head3.next.next.next.next.next.next = new ListNode(9);

let head4 = new ListNode(9);
head4.next = new ListNode(9);
head4.next.next = new ListNode(9);
head4.next.next.next = new ListNode(9);

function addTwoNumbers3(l1: ListNode, l2: ListNode): ListNode | null {
  let curr = l1;
  let curr2 = l2;
  let temp = 0;
  let result: ListNode = new ListNode();
  let head = result;
  while (curr !== null) {
    let total = curr.val + (curr2?.val ?? 0) + temp;
    console.log({ a: curr.val, b: curr2?.val ?? 0, temp, total });
    if (total >= 10) {
      head.val = total - 10;
      temp = 1;
    } else {
      head.val = total;
      temp = 0;
    }
    curr = curr.next;
    if (curr === null) {
      if (temp !== 0) {
        head.next = new ListNode(temp);
        head = head.next;
      }
    } else {
      head.next = new ListNode();
      head = head.next;
      curr2 = curr2.next ?? new ListNode();
    }
  }
  return result;
}

// const result3 = addTwoNumbers3(head3, head4);
// console.log(printList(result3));

// l2.length > l1.length FIX
let head5 = new ListNode(2);
head5.next = new ListNode(4);
head5.next.next = new ListNode(9);

let head6 = new ListNode(5);
head6.next = new ListNode(6);
head6.next.next = new ListNode(4);
head6.next.next.next = new ListNode(9);
function addTwoNumbers4(l1: ListNode, l2: ListNode): ListNode | null {
  let curr = l1;
  let curr2 = l2;
  let temp = 0;
  let result: ListNode = new ListNode();
  let head = result;
  while (true) {
    let total = curr.val + (curr2?.val ?? 0) + temp;
    console.log({ a: curr.val, b: curr2?.val ?? 0, temp, total });
    if (total >= 10) {
      head.val = total - 10;
      temp = 1;
    } else {
      head.val = total;
      temp = 0;
    }
    curr = curr.next;
    curr2 = curr2.next;
    if (curr === null && curr2 === null) {
      if (temp !== 0) {
        head.next = new ListNode(temp);
        head = head.next;
      }
      break;
    } else if (curr === null && curr2 !== null) {
      head.next = new ListNode();
      head = head.next;
      curr = new ListNode();
    } else if (curr !== null && curr2 === null) {
      head.next = new ListNode();
      head = head.next;
      curr2 = new ListNode();
    } else {
      head.next = new ListNode();
      head = head.next;
    }
  }
  return result;
}

// const result4 = addTwoNumbers4(head5, head6);
// console.log(printList(result4));

//PASSED BUT NEED PERFORMANCE
function addTwoNumbers5(curr: ListNode, curr2: ListNode): ListNode | null {
  let temp = 0;
  let result: ListNode = new ListNode();
  let head = result;
  while (true) {
    let total = (curr.val + curr2.val + temp);
    if (total >= 10) {
      head.val = total - 10;
      temp = 1;
    } else {
      head.val = total;
      temp = 0;
    }
    curr = curr.next;
    curr2 = curr2.next;
    if (curr === null && curr2 === null) {
      if (temp !== 0) {
        head.next = new ListNode(temp);
        head = head.next;
      }
      break;
    }
    if (curr === null && curr2 !== null) {
      head.next = new ListNode();
      head = head.next;
      curr = new ListNode();
      continue;
    }
    if (curr !== null && curr2 === null) {
      head.next = new ListNode();
      head = head.next;
      curr2 = new ListNode();
      continue;
    }
    head.next = new ListNode();
    head = head.next;
  }
  return result;
}

const result5 = addTwoNumbers5(head5, head6);
console.log(printList(result5));
