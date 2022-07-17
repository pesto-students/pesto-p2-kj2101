// Problem 8.5: Find the Town Judge

function findJudge(n, trust) {
  let personsTrusted = Array(n).fill(0);
  trust.forEach((trustPair) => {
    personsTrusted[trustPair[0] - 1]--;
    personsTrusted[trustPair[1] - 1]++;
  });

  for (let i = 0; i < n; i++) if (personsTrusted[i] === n - 1) return i + 1;
  return -1;
}

console.log(findJudge(2, [[1, 2]]));
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);
