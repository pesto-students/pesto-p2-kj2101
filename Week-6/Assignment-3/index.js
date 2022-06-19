function sortArray(arr) {
  let low = 0,
    high = arr.length - 1,
    mid = 0;
  while (mid <= high) {
    if (arr[mid] === 0) {
      let temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      mid++;
      low++;
    } else if (arr[mid] === 1) mid++;
    else {
      let temp = arr[high];
      arr[high] = arr[mid];
      arr[mid] = temp;
      high--;
    }
  }
  return arr;
}

console.log(sortArray([0, 2, 1, 2, 0]));
