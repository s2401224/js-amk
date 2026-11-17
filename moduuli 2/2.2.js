const count = Number(prompt('How many participants?'));
const names = [];

for (let i = 0; i < count; i++) {
    const name = prompt(`Name for participant ${i + 1}:`);
    names.push(name);
}

names.sort();

const list = document.getElementById('list');

for (const name of names) {
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);
}