'use strict'

const numero = prompt(`Anna numero`);
let tulo = 1;


for (let i = 1; i <= numero; i++) {
tulo *= i
}

let lopputulo = tulo

 document.getElementById('kohde').innerHTML = lopputulo;
