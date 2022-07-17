// Problem 7.4: Parenthesis Checker

function isValidParentheses(str) {
  let stack = [];
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") stack.push(str[i]);
    else {
      switch (str[i]) {
        case "}":
          if (stack[stack.length - 1] !== "{") return false;
          stack.pop();
          break;
        case "]":
          if (stack[stack.length - 1] !== "[") return false;
          stack.pop();
          break;
        case ")":
          if (stack[stack.length - 1] !== "(") return false;
          stack.pop();
          break;
      }
    }
  }
  return stack.length ? false : true;
}

console.log(isValidParentheses("()"));
console.log(isValidParentheses("(){}[]"));
console.log(isValidParentheses("(]"));
