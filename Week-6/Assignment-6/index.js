function threeSumClosest(arr, sum) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let i = 0;
  let ans = Number.NEGATIVE_INFINITY;
  while (i < arr.length - 2) {
    let left = i + 1;
    let right = arr.length - 1;
    let threeSum = 0;
    while (left < right) {
      threeSum = arr[i] + arr[left] + arr[right];
      if (threeSum === sum) return threeSum;
      else if (threeSum < sum) left++;
      else right--;
    }
    if (Math.abs(threeSum - sum) < Math.abs(ans - sum)) ans = threeSum;
    i++;
  }
  return ans;
}
console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([2, 1, -9, -7, -8, 2, -8, 2, 3, -8], -1));
