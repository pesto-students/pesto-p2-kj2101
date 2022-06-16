import mathOperations from "./index.js";

test("testing addition operation", () => {
  expect(mathOperations.sum(1, 2)).toBe(3);
});

test("testing subtraction operation", () => {
  expect(mathOperations.diff(1, 2)).toBe(-1);
});

test("testing multiplication operation", () => {
  expect(mathOperations.product(1, 2)).toBe(2);
});
