'use strict'

function Paiva() {
  const nyt = new Date();
  const kuut = ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];
  return nyt.getDate() + " . " + kuut[nyt.getMonth()] + " " + nyt.getFullYear();
}

function display() {
  const target = document.getElementById('target');
  const selain = navigator.userAgent;
  const os = navigator.platform;
  const Nleveys = window.screen.width;
  const Nkorkeus = window.screen.height;
  const mahNleveys = window.screen.availWidth;
  const mahNkorkeus = window.screen.availHeight;
  const päivä = Paiva();
  const aika = new Date().toLocaleTimeString('fi-FI', {
    hour: 'numeric', minute: 'numeric'
  });


target.innerHTML = `
<p> Selain ja versio:  ${selain}</p>
                <p>Käyttöjärjestelmä: ${os}</p>
                <p>Näytön leveys: ${Nleveys}px</p>
                <p>Näytön korkeus: ${Nkorkeus}px</p>
                <p>Vapaata tilaa selaimelle näytöllä: </p>
                <p> ${mahNleveys}px</p>
                <p> ${mahNkorkeus}px</p>
                <p>Päivä: ${päivä}</p>
                <p>Kello: ${aika}</p>`;
}

window.onload = display;
