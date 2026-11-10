const year = parseInt(prompt('Enter a year:'));

let isLeapYear;

if (year % 400 === 0) {
  isLeapYear = true;
} else if (year % 100 === 0) {
  isLeapYear = false;
} else if (year % 4 === 0) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}

const message = isLeapYear
  ? `${year} is a leap year.`
  : `${year} is not a leap year.`;

document.getElementById('result').textContent = message;