/**
 * Day 002
 * String diamond
 *
 * Your task is to return a string that displays a 
 * diamond shape on the screen using asterisk (“*”) characters.
 *
 * The shape that the print method will return should resemble a diamond. 
 * A number provided as input will represent the number of asterisks printed on the middle line. 
 * The line above and below will be centered and will have two less asterisks than the middle line. 
 * This reduction will continue for each line until a line with a single asterisk is printed 
 * at the top and bottom of the figure. 
 * Return null if input is an even number or a negative number.
 * 
 * Note: JS and Python students must implement diamond() method and return None (Py) or null(JS) for invalid input.

 * https://dev.to/thepracticaldev/daily-challenge-2-string-diamond-21n2
 */

const drawRow = (qty, replaceWith) => {
  let str = "";
  for (let i = 0; i < qty; i++) {
    str += replaceWith;
  }

  return str;
};

const printDiamond = (n) => {
  if (n % 2 === 0 || n < 0) {
    return "The number should be odd and positive";
  }

  let row = "";
  let stars = 0;

  for (let i = 0; i < n; i++) {
    if (i > parseInt(n / 2)) {
      stars -= 2;
    } else {
      stars = i * 2 + 1;
    }

    const spaces = (n - stars) / 2;

    row += drawRow(spaces, " ");
    row += drawRow(stars, "*");
    row += drawRow(spaces, " ");

    if (i !== n - 1) {
      row += "\n";
    }
  }

  return row;
};

console.log(printDiamond(-11));
