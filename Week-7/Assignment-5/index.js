// Problem 7.5: Next Greater ELement

function nextLargerElement(arr, n) {
  if (n == 1) return [-1];
  let stack = [];
  stack.push(arr[n - 1]);
  arr[n - 1] = -1;
  for (let i = n - 2; i >= 0; i--) {
    let current = arr[i];
    while (stack.length > 0 && stack[stack.length - 1] < current) stack.pop();
    arr[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(current);
  }
  return arr;
}

console.log(nextLargerElement([6, 8, 0, 1, 3], 5));
console.log(nextLargerElement([11, 13, 21, 3], 4));
