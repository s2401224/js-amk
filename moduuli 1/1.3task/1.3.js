const first = parseInt(prompt('Enter the first integer:'));
const second = parseInt(prompt('Enter the second integer:'));
const third = parseInt(prompt('Enter the third integer:'));

const sum = first + second + third;
const product = first * second * third;
const average = sum / 3;

document.getElementById('sum').textContent = `Sum: ${sum}`;
document.getElementById('product').textContent = `Product: ${product}`;
document.getElementById('average').textContent = `Average: ${average}`;