'use strict'

const numbers = [];

            for (let i = 1; i <= 5; i++) {
                const input = prompt(`Anna numero ${i}:`);
                numbers.push(parseFloat(input));
            }

            const outputElement = document.getElementById('kohde');
            outputElement.innerHTML = `Numerot ${numbers}`;

            const userInput = parseFloat(prompt("Anna numero tarkistaaksesi, löytyykö numero jo: "));
            if (numbers.includes(userInput)) {
                outputElement.innerHTML += `<br>${userInput} löytyy`;
            } else {
                outputElement.innerHTML += `<br>${userInput} ei löydy`;
            }

            numbers.pop();
            outputElement.innerHTML += `<br>Numerot poiston jälkeen ${numbers}`;

            numbers.sort(function(a, b) {
                return a - b;
            });
            outputElement.innerHTML += `<br>järjestettynä ${numbers}`;
