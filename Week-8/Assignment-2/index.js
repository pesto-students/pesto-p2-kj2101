// Problem 8.2 : Validate a Binary Tree

class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

var prev = Number.NEGATIVE_INFINITY;
function isValidBST(root) {
  if (root === null) return true;
  if (!isValidBST(root.left)) return false;
  if (root.data <= prev) return false;
  prev = root.data;
  return isValidBST(root.right);
}

let root;

root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

console.log(isValidBST(root));
