import { add } from "../utils/calculatorUtils";

describe("add function tests", () => {
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

  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n3")).toBe(6);
  });

  test('should handle custom delimiters specified in the format "//[delimiter]\\n"', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//{\n1{2{3")).toBe(6);
  });

  test('should handle long custom delimiters specified in the format "//[delimiter]\\n"', () => {
    expect(add("//;;\n1;;2")).toBe(3);
    expect(add("//{{{\n1{{{2{{{3")).toBe(6);
  });

  test("should list all negative numbers in the exception message", () => {
    expect(() => add("1,-2,-3")).toThrow(
      "negative numbers not allowed: -2, -3"
    );
  });
});
