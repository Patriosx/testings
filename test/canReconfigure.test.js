import { describe, expect, it } from "vitest";
import { canReconfigure } from "../canReconfigure";

describe("can reconfigure?", () => {
  //   it("should be a function", () => {
  //     expect(canReconfigure).toBeTypeOf("function");
  //   });
  it("should throw an error if 1st parameter is missing", () => {
    expect(() => canReconfigure()).toThrow();
  });
  it("should throw an error if 1st parameter is not String", () => {
    expect(() => canReconfigure(10)).toThrow();
  });
  it("should throw an error if 2nd parameter is missing", () => {
    expect(() => canReconfigure("lol")).toThrow();
  });
  it("should throw an error if 2nd parameter is not String", () => {
    expect(() => canReconfigure("YEAH", 10)).toThrow();
  });
  it("should throw an error if not return a Boolean", () => {
    expect(canReconfigure("BAC", "ABC")).toBeTypeOf("boolean");
  });
  it("should return false if the strings provided have different length", () => {
    expect(canReconfigure("BAC", "ABCD")).toBe(false);
  });
  it('should return false if a letter is repetead in one parameter', () => {
    expect(canReconfigure("abc", "abb")).toBe(false);
  });
  it('should return false if string has different order of transformation', () => {
    expect(canReconfigure("XBOX", "XXBO")).toBe(false);
  });

});
