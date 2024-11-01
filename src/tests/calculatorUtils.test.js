import { add } from "../utils/calculatorUtils";

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number for a single input", () => {
  expect(add("1")).toBe(1);
  expect(add("5")).toBe(5);
});

test("should return the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
  expect(add("1,5")).toBe(6);
});

test("should return the sum of multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
  expect(add("1,2,3,4,5")).toBe(15);
});
