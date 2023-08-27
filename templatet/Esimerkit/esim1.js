function grow(array) {
    const uusiTaulukko  [...array];
    for (let i = 0; i < array.length; i++) {
        uusiTaulukko[i]++;
    }
    return uusiTaulukko;
}

const numbers = [5, 6, 7];
cosnt tulos = grow(numbers);
console.log(numbers[0] + '' + numbers[1] + '' + numbers[2]);
