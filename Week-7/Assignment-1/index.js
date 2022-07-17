// Problem 7.1 : Reverse the Linked list

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFront(element) {
    let node = new Node(element);
    if (this.head === null) this.head = node;
    else {
      let current = this.head;
      this.head = node;
      this.head.next = current;
    }
  }
}

function traverseLinkedList(head) {
  let temp = head;
  let arr = [];
  while (temp != null) {
    arr.push(temp.element);
    temp = temp.next;
  }
  console.log(arr);
}

function reverseList(head) {
  if (head === null || head.next === null) return head;
  let prev = null;
  let curr = head;
  let next = curr.next;
  while (next !== null) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = curr.next;
    curr.next = prev;
  }
  return curr;
}

let ll = new LinkedList();

ll.addFront(1);
ll.addFront(2);

console.log("Before reversal");

traverseLinkedList(ll.head);

let reversedListHead = reverseList(ll.head);

console.log("After reversal");

traverseLinkedList(reversedListHead);
