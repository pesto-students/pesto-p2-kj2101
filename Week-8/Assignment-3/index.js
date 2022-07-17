// Problem 8.3: Binary Tree Level Order Traversal

class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

function levelOrderOfValues(root) {
  if (root === null) return [];
  let ans = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let currentLevel = [];
    for (let i = queue.length - 1; i >= 0; i--) {
      let node = queue[0];
      queue.shift();
      currentLevel.push(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ans.push(currentLevel);
  }
  return ans;
}

let root;

root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

console.log(levelOrderOfValues(root));
