const getSetWithoutDuplicate = (arr) => {
  return new Set(arr);
};
const hasDuplicate = (arr) => {
  const lengthWithoutDuplicate = getSetWithoutDuplicate(arr).size;
  return lengthWithoutDuplicate !== arr.length;
};
console.log(hasDuplicate([1, -1, 1, 2, 4]));
