import mathOperations from "./index.js";

describe("testing addition operation", () => {
  test("testing addition of 2 positive numbers", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
  test("testing addition of 1 positive number and 1 negative number", () => {
    expect(mathOperations.sum(1, -9)).toBe(-8);
  });
  test("testing addition of 2 positive numbers", () => {
    expect(mathOperations.sum(-1, -2)).toBe(-3);
  });

  test("testing addition of 2 float numbers", () => {
    expect(mathOperations.sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
  test("testing addition with 1 number only", () => {
    expect(mathOperations.sum(1)).toBeFalsy();
  });
  test("testing addition without arguments", () => {
    expect(mathOperations.sum()).toBeFalsy();
  });
});

describe("testing subtraction operation", () => {
  test("testing subtraction of 2 positive numbers", () => {
    expect(mathOperations.diff(1, 2)).toBe(-1);
  });
  test("testing subtraction of 1 positive number and 1 negative number", () => {
    expect(mathOperations.diff(1, -9)).toBe(10);
  });
  test("testing subtraction of 2 positive numbers", () => {
    expect(mathOperations.diff(-1, -2)).toBe(1);
  });
  test("testing subtraction of 2 float numbers", () => {
    expect(mathOperations.diff(0.1, 0.2)).toBeCloseTo(-0.1);
  });
  test("testing subtraction with 1 number only", () => {
    expect(mathOperations.diff(1)).toBeFalsy();
  });
  test("testing subtraction without arguments", () => {
    expect(mathOperations.diff()).toBeFalsy();
  });
});

describe("testing multiplication operation", () => {
  test("testing multiplication of 2 positive numbers", () => {
    expect(mathOperations.product(1, 2)).toBe(2);
  });
  test("testing multiplication of 1 positive number and 1 negative number", () => {
    expect(mathOperations.product(1, -9)).toBe(-9);
  });
  test("testing multiplication of 2 positive numbers", () => {
    expect(mathOperations.product(-1, -2)).toBe(2);
  });
  test("testing multiplication of 2 float numbers", () => {
    expect(mathOperations.product(0.1, 0.2)).toBeCloseTo(0.02);
  });
  test("testing multiplication with 1 number only", () => {
    expect(mathOperations.product(1)).toBeFalsy();
  });
  test("testing multiplication without arguments", () => {
    expect(mathOperations.product()).toBeFalsy();
  });
});
