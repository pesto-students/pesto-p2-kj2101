// Problem 7.2: Rotate Linked List

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

function rotateList(head, k) {
  let temp = head;

  while (temp.next !== null) temp = temp.next;

  temp.next = head;
  let prev = null;
  temp = head;
  k = k - 1;

  while (k >= 0) {
    prev = temp;
    temp = temp.next;
    k--;
  }

  prev.next = null;
  return temp;
}

let ll = new LinkedList();

ll.addFront(8);
ll.addFront(7);
ll.addFront(6);
ll.addFront(5);
ll.addFront(4);
ll.addFront(3);
ll.addFront(2);
ll.addFront(1);

console.log("Before rotating array");

traverseLinkedList(ll.head);

let rotatedListHead = rotateList(ll.head, 4);

console.log("After rotating array");

traverseLinkedList(rotatedListHead);
