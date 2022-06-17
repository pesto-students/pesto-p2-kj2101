function isVowel(char) {
  const vowelSet=new Set(['a','e','i','o','u'])
  return vowelSet.has(char);
}
function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();
    if (isVowel(lowerCaseChar)) {
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount("iiiiiiaaaskdhsoooaa"));
