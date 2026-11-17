const count = 6;
const names = [];

for (let i = 0; i < count; i++) {
    const name = prompt(`Name for dog ${i + 1}:`);
    names.push(name);
}

names.sort();
names.reverse();

const list = document.getElementById('list');

for (const name of names) {
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);
}