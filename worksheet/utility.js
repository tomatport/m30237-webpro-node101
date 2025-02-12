/**
 * The subtract function is complete and ready for use.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * To make the add function available for import to other
 * programs it must be exported, so prepend the word
 * "export" to the function definition (as seen in the
 * subtract example above)
 */
export function add(a, b) {
  return a + b;
}

// Create a function called compare that accepts two arrays of numbers and compares the contents.
export function compare(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

// Create and export a function called largest that accepts an array of numbers and returns the largest.
export function largest(numberArray) {
  return Math.max(...numberArray);
}

// Create and export a function called zeroest that accepts an array of integer numbers and returns the one closest to zero
export function zeroest(numberArray) {
  const closest = {
    number: null,
    numberAbs: null,
  };

  for (const number of numberArray) {
    const numberAbs = Math.abs(number);
    if (numberAbs < closest.numberAbs || closest.numberAbs === null) {
      closest.numberAbs = numberAbs;
      closest.number = number;
    }
  }

  return closest.number;
}
