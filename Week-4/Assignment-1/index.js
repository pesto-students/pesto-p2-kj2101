const CustomPromiseState = {
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};

class CustomPromise {
  constructor(funn) {
    this.CustomPromiseState = CustomPromiseState.PENDING;
    this.resolver = this.resolver.bind(this);
    this.rejector = this.rejector.bind(this);
    this.thenFn = null;
    this.catchFn = null;
    funn(this.resolver, this.rejector);
  }
  resolver(resolvedData) {
    if (this.CustomPromiseState === CustomPromiseState.PENDING) {
      this.thenFn && this.thenFn(resolvedData);
    }
    this.CustomPromiseState = CustomPromiseState.RESOLVED;
  }
  rejector(resolvedData) {
    if (this.CustomPromiseState === CustomPromiseState.PENDING) {
      this.catchFn && this.catchFn(resolvedData);
    }
    this.CustomPromiseState = CustomPromiseState.REJECTED;
  }
  then(thenFn) {
    this.thenFn = thenFn;
    return this;
  }
  catch(catchFn) {
    this.catchFn = catchFn;
    return this;
  }
}
const getNumber = () =>
  new CustomPromise((res, rej) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
      if (randomNumber % 5 === 0) rej(`Rejected with num: ${randomNumber}`);
      else res(`Resolved with num:${randomNumber}`);
    });
  });
getNumber().then(console.log).catch(console.log);
