const { romanNumerals } = require("../roman-numerals");
const { expect } = require("chai");

describe("#romanNumerals", () => {
  it("should return 1 when given 'I'", () => {
    const actual = romanNumerals("I");
    const expected = 1;
    expect(actual).to.equal(expected);
  });

  it("should return 5 when given 'V'", () => {
    const actual = romanNumerals("V");
    const expected = 5;
    expect(actual).to.equal(expected);
  });

  it("should return 10 when given 'X'", () => {
    const actual = romanNumerals("X");
    const expected = 10;
    expect(actual).to.equal(expected);
  });

  it("should return 50 when given 'L'", () => {
    const actual = romanNumerals("L");
    const expected = 50;
    expect(actual).to.equal(expected);
  });

  it("should return 100 when given 'C'", () => {
    const actual = romanNumerals("C");
    const expected = 100;
    expect(actual).to.equal(expected);
  });

  it("should return 500 when given 'D'", () => {
    const actual = romanNumerals("D");
    const expected = 500;
    expect(actual).to.equal(expected);
  });

  it("should return 1000 when given 'M'", () => {
    const actual = romanNumerals("M");
    const expected = 1000;
    expect(actual).to.equal(expected);
  });

  it("should return 3 when given 'III'", () => {
    const actual = romanNumerals("III");
    const expected = 3;
    expect(actual).to.equal(expected);
  });

  it("should return 9 when given 'IX'", () => {
    const actual = romanNumerals("IX");
    const expected = 9;
    expect(actual).to.equal(expected);
  });

  it("should return 99 when given 'XCIX'", () => {
    const actual = romanNumerals("XCIX");
    const expected = 99;
    expect(actual).to.equal(expected);
  });

  it("should return 2023 when given 'MMXXIII'", () => {
    const actual = romanNumerals("MMXXIII");
    const expected = 2023;
    expect(actual).to.equal(expected);
  });

  it("should throw an error when given an invalid Roman numeral", () => {
    expect(() => romanNumerals("INVALID")).to.throw("Invalid Roman numeral");
  });
});
