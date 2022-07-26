// console.log('js ok');

// - Crea l'array contenente almeno 5 elementi
const myArray = [];
const randomVar = Math.floor(Math.random() * (51 - 5)) + 5;

// Creo array casuale
for (let i = 0; i < randomVar; i++) {
    myArray.push(Math.floor(Math.random() * 51));
}
console.log('Il mio array: ', myArray);

console.log('');

console.log('Estrazione:');

// - PER OGNI i = array.length; i > array.length-5 ; i--
for (let i = myArray.length - 1; i > myArray.length - 6; i--) {
    // - Stampa array[i-1]
    console.log('Estrazione elemento numero: ' + i + ' => ' + myArray[i]);
}