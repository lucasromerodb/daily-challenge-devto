/**
 * Day 003
 * Vowel counter
 *
 * Write a function that returns the number (count) of vowels in a given string.
 * Letters considered as vowels are: a, i, e, o, and u. The function should be able
 * to take all types of characters as input, including lower case letters,
 * upper case letters, symbols, and numbers.
 *
 * https://dev.to/thepracticaldev/daily-challenge-3-vowel-counter-34ni
 */

const getVowelsQty = (word = "Hello world") => {
  const pattern = new RegExp(/[^aeiou]/, "gi");
  const vowels = word.replace(pattern, "");
  return vowels.length;
};

console.log(getVowelsQty("Dev Together"));
