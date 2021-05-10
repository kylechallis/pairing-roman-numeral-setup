const { romanNumerals } = require('../roman-numerals');

describe('#romanNumerals', () => {
  it('should be true', () => {
    const actual = romanNumerals();

    const expected = true;

    expect(actual).to.equal(expected);
  });
});
