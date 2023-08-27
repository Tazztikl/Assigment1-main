'use strict'

const numbers = [];

while (true) {
    const input = prompt("Enter a number (or type 'done' to end):");
    
    if (input.toLowerCase() === 'done') {
        break;
    }

    const parsedNumber = parseFloat(input);
    if (!isNaN(parsedNumber)) {
        numbers.push(parsedNumber);
    } else {
        alert("Invalid input");
    }
}

const outputElement = document.getElementById('kohde');
outputElement.innerHTML = "Even numbers: <br>";

for (const number of numbers) {
    if (number % 2 === 0) {
        outputElement.innerHTML += `${number}<br>`;
    }
}


