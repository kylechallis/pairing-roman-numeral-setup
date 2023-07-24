/** Write a function that converts Roman numbers into Arabic numbers and throws an error if the Roman number is in an invalid form. */

/** Rules
 * 1. Repeating a number up to three times adds that value three times.
 * 2. A Roman ‘digit’ can’t repeat more than three times.  Instead the previous 1, 10, or 100 equivalent value is used to subtract from the next ‘digit’.
 * 3. With the exception of the subtraction rule above, all values must decrease in scale from left to right and are added together.
 * I = 1
 * V = 5
 * X = 10
 * L = 50
 * C = 100
 * D = 500
 * M = 1000
 */

const romanNumerals = (roman) => {
  const romanToArabicMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arabicNumber = 0;
  let prevValue = 0;
  let repeatCount = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentDigit = roman[i].toUpperCase();
    const currentValue = romanToArabicMap[currentDigit];

    if (currentValue === undefined) {
      throw new Error(`Invalid Roman numeral: '${currentDigit}'`);
    }

    if (currentValue < prevValue) {
      arabicNumber -= currentValue;
    } else {
      arabicNumber += currentValue;
      if (currentValue === prevValue) {
        repeatCount++;
        if (repeatCount > 2) {
          throw new Error("Invalid Roman numeral: too many repetitions of the same digit.");
        }
      } else {
        repeatCount = 0;
      }
    }

    prevValue = currentValue;
  }

  return arabicNumber;
};

module.exports = {
  romanNumerals,
};

