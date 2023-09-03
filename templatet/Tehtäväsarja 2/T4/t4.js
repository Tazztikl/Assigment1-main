'use strict'

function sortArray(numerot) {
const järjestetyt = numerot.slice().sort(function(a, b) {
    return a - b;
});
return järjestetyt;
}

const ryhmä = [7, 2, 10, 5, 1];
console.log("alkuperänen ryhmä", ryhmä);

const sortedArray = sortArray(ryhmä);
console.log("järjestetty ryhmä", järjestetyt);

const outputElement = document.getElementById('kohde');
