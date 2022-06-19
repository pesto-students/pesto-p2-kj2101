function maxSubarraySum(arr, N) {
  let sum = 0;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < N; i++) {
    sum = sum + arr[i];
    if (max < sum) {
      max = sum;
    }
    if (sum < 0) sum = 0;
  }
  return max;
}

console.log(maxSubarraySum([-1, -2, -3, -4], 4));
console.log(maxSubarraySum([1, 2, 3, -2, 5], 5));
console.log(maxSubarraySum([1, 2, 3, 4, -10], 5));
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4], 9));
