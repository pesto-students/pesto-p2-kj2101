// Problem 8.1: Maximum Depth of Binary Tree

class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

let root;

function maxDepth(root) {
  if (root === null) return 0;
  let leftTreeLength = maxDepth(root.left);
  let rightTreeLength = maxDepth(root.right);
  return (
    (leftTreeLength > rightTreeLength ? leftTreeLength : rightTreeLength) + 1
  );
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Height of tree is : " + maxDepth(root));
