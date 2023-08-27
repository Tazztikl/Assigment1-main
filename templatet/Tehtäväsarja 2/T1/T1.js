'use strict'

const fruits = [`apple`, `banana`, `orange`, `grape`, `kiwi`];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

const vegetables = [];
for (let i = 1; i <= 3; i++) {
    const vegetable = prompt(`Give a Vegetable ${i}:`);
    vegetables.push(vegetable);
}

console.log(vegetables);
console.log(vegetables.length);
