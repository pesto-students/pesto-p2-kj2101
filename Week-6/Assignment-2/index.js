var generateMatrix = function (arr, rows, columns) {
  let left = 0,
    right = rows - 1,
    top = 0,
    bottom = columns - 1;
  let result = [];

  let direction = 0;
  while (left <= right && top <= bottom) {
    if (direction === 0) {
      for (let i = top; i <= bottom; i++) {
        result.push(arr[left][i]);
        direction = 1;
      }
    }

    if (direction === 1) {
      for (let i = left + 1; i <= right; i++) {
        result.push(arr[i][bottom]);
        direction = 2;
      }
    }
    if (direction === 2) {
      for (let i = bottom - 1; i >= top; i--) {
        result.push(arr[right][i]);
        direction = 3;
      }
    }
    if (direction === 3) {
      for (let i = right - 1; i > left; i--) {
        result.push(arr[i][top]);
        direction = 0;
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return result;
};

console.log(
  generateMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    3,
    3
  )
);

console.log(
  generateMatrix(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    3,
    4
  )
);
