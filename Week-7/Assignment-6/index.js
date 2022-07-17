// Problem 7.6: Implement a Queue using 2 stack

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (!this.stack1.length) return -1;
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1[this.stack1.length - 1]);
      this.stack1.pop();
    }
    let ans = this.stack2[this.stack2.length - 1];
    this.stack2.pop();
    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2[this.stack2.length - 1]);
      this.stack2.pop();
    }
    return ans;
  }
}

function queueOperations(arr) {
  let queue = new Queue();
  let j = 0;
  let ans = [];
  while (j < arr.length) {
    if (arr[j] === 1) {
      queue.enqueue(arr[j + 1]);
      j++;
    } else {
      ans.push(queue.dequeue());
    }
    j++;
  }
  return ans;
}

console.log(queueOperations([1, 2, 1, 3, 2, 1, 4, 2]));
console.log(queueOperations([1, 2, 2, 2, 1, 4]));
