// Problem 7.3: Detect loop in a linked list

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

function hasLoop(head) {
  let slow = head;
  let fast = head;
  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

let ll = new LinkedList();

ll.addFront(1);
ll.addFront(2);
ll.addFront(3);

console.log("Before adding cycle");
console.log(hasLoop(ll.head));

let temp = ll.head;

while (temp.next !== null) temp = temp.next;
temp.next = ll.head;

console.log("After adding cycle");
console.log(hasLoop(ll.head));
