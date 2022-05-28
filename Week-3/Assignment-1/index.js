const memoize = (fn) => {
  let cache = {};
  console.log(cache);
  return (...args) => {
    let cacheKey = args.join("+");
    let val = cache[cacheKey];
    if (val) {
      return val;
    } else {
      let result = args.reduce((acc, curr) => fn(acc, curr), 0);
      cache[cacheKey] = result;
      return result;
    }
  };
};

const add = (a, b) => a + b;

const memoizeAdd = memoize(add);
console.time();
console.log(memoizeAdd(100, 200));
console.timeEnd();
console.time();
console.log(memoizeAdd(200, 100));
console.timeEnd();
console.time();
console.log(memoizeAdd(100, 100));
console.timeEnd();
console.time();
console.log(memoizeAdd(100, 100));
console.timeEnd();
console.time();
console.log(memoizeAdd(100, 100, 100));
console.timeEnd();
console.time();
console.log(memoizeAdd(100));
console.timeEnd();
