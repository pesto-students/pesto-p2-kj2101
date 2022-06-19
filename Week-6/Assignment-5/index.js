function pairDifference(arr, diff) {
  let left = 0,
    right = 0;

  arr.sort((a, b) => a - b);

  diff = Math.abs(diff);

  while (left < arr.length && right < arr.length) {
    if (arr[right] - arr[left] == diff) {
      if (left != right) {
        return 1;
      } else {
        right += 1;
      }
    } else if (arr[right] - arr[left] > diff) {
      left += 1;
    } else if (arr[right] - arr[left] < diff) {
      right += 1;
    }
  }
  return 0;
}

console.log(pairDifference([5, 10, 3, 2, 50, 80], 78));
console.log(pairDifference([-10, 20], 30));
