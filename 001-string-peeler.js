/**
 * Day 001
 * String peeler
 *
 * Your goal is to create a function that removes the first and last letters of a string.
 * Strings with two characters or less are considered invalid.
 * You can choose to have your function return null or simply ignore.
 *
 * https://dev.to/thepracticaldev/daily-challenge-1-string-peeler-4nep
 */

const peelString = (str = "Hello world") => {
  if (str.length > 2 && str !== "") {
    str = str.slice(1, str.length - 1);
  }

  return str;
};

console.log(peelString());
