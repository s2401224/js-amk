const numbers = [];

while (true) {
    const input = Number(prompt('Enter a number:'));

    if (numbers.includes(input)) {
        alert('This number has already been given.');
        break;
    }

    numbers.push(input);
}

numbers.sort((a, b) => a - b);

for (const n of numbers) {
    console.log(n);
}