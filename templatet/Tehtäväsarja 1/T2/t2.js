'use strict';

const ekaX = prompt('Syötä ekan pisteen X');
const ekaY = prompt('Syötä ekan pisteen Y');

const tokaX = prompt('Syötä tokan pisteen X');
const tokaY = prompt('Syötä tokan pisteen Y');



const Distance = (Math.sqrt((Math.pow((tokaX - ekaX), 2)) + (Math.pow((tokaY - ekaY), 2))));

const vastaus = `etäisyys on ${Distance}`;

//tulostus
document.getElementById('kohde').innerHTML = vastaus;
