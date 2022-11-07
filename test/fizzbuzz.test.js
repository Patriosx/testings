import { describe, it, expect } from "vitest";
import { fizzbuzz } from "../../fizzbuzz";

/*
Write a method that returns:
    'Fizz' for multiples of three.
    'Buzz' for the multiples of five.
    For numbers which are multiples of both three and five return 'FizzBuzz'.
    For numbers that are neither, return the input number.
*/

describe("fizzbuzz", () => {
  // Este test es redundante
  //   it("should be a function", () => {
  //     expect(typeof fizzbuzz).toBe("function");
  //   });

  it("should throw an error if parameter is not a number", () => {
    expect(() => fizzbuzz()).toThrow();
  });
  it("should throw a specific error if parameter is not a number", () => {
    expect(() => fizzbuzz()).toThrow("the parameter is not a number");
  });
  it("should throw an error if parameter is not a number (NaN)", () => {
    expect(() => fizzbuzz(NaN)).toThrow("the parameter is NaN");
  });
  it("should return 1 if number provied is 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });
  it("should return 2 if number provied is 2", () => {
    expect(fizzbuzz(2)).toBe(2);
  });
  it("should return fizz if number provied is 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });
  it("should return fizz if number provied is multiple of 3", () => {
    expect(fizzbuzz(12)).toBe("fizz");
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(123)).toBe("fizz");
  });
  //Este test esta cubierto y comprobado
  //   it("should return 4 if the number provided is 4", () => {
  //     expect(fizzbuzz(4)).toBe(4);
  //   });
  it("should return fizz if number provied is multiple of 5", () => {
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(65)).toBe("buzz");
    expect(fizzbuzz(100)).toBe("buzz");
  });
  it("should return fizz if number provied is multiple of 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(555)).toBe("fizzbuzz");
    expect(fizzbuzz(5670)).toBe("fizzbuzz");
  });
});
