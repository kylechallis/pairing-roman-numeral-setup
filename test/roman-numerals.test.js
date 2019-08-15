const romanNumerals = require("../roman-numerals").romanNumerals;

describe("#romanNumerals", () => {
  it("should be true", () => {
    const actual = romanNumerals();

    const expected = true;

    expect(actual).to.equal(expected);
  });
});
