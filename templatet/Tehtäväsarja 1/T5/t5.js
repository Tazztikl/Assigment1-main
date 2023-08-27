'use strict'

const numero = prompt(`Anna numero`);
let summa = 0;


for (let i = 0; i <= numero; i++) {
summa += i
}

let loppusumma = summa

 document.getElementById('kohde').innerHTML = loppusumma;
