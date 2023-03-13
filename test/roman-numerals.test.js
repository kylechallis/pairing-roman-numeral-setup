const { romanNumerals } = require("../roman-numerals");

describe("#romanNumerals", () => {
  it("should return 1 when given 'I'", () => {
    const actual = romanNumerals("I");

    const expected = 1;

    expect(actual).to.equal(expected);
  });
});
