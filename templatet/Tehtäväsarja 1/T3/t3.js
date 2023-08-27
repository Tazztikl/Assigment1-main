`use strict`;

const sivuA = prompt(`Anna kolmion ekan kyljen pituus`);
const sivuB = prompt(`Anna kolmion tokan kyljen pituus`);
const sivuC = prompt(`Anna kolmion kolmannen kyljen pituus`);

let tulos = '';

//tasasivuinen

if (sivuA === sivuB && sivuB === sivuC) {
        tulos = 'Tasasivuinen kolmio';
    }
//tasakylkinen
else if (sivuA === sivuB || sivuA === sivuC || sivuB === sivuC ) {    
            tulos = 'tasakylkinen kolmio';
        }
//epäsäännöllinen
else {
            tulos= 'Epäsäännöllinen';
        }

document.getElementById('kohde').insertAdjacentHTML = ('beforeend', tulos);
