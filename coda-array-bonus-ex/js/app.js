const myArray = [];

// - Chiedi all'utente quanti elementi dovrà contenere l'array
const arrayLen = parseInt(prompt("Quanti elementi vuoi inserire nell'array?"));
// console.log(arrayLen);

if (arrayLen > 0 && !isNaN(arrayLen)) {
    // - Chiedi all'utente quanti elementi estrarre
    const iLen = parseInt(prompt("Quanti elementi vuoi estrarre dall'array?"));
    if (iLen > 0 && !isNaN(iLen) && iLen <= arrayLen) {
        // - Crea l'array contenente tanti elementi quanti ne vuole l'utente
        for (let i = 0; i < arrayLen; i++) {
            myArray.push(Math.floor(Math.random() * (arrayLen + 1)));
        }
        console.log('Il mio array: ', myArray);
        console.log('');
        console.log('Estrazione:');
        // - PER OGNI i = array.length; i > array.length-numero da estrarre ; i--
        for (let i = myArray.length - 1; i > myArray.length - iLen - 1; i--) {
            // - Stampa array[i-1]
            console.log('Estrazione elemento numero: ' + i + ' => ' + myArray[i]);
        }
    } else {
        // - SE numero negativo || non è un numero || numero da estrarre > array.length
        // - Segnala errore
        console.log("Posso estrarre solo un numero di elementi valido, maggiore di 0 e non più della dimensione dell'array!")
    }
} else {
    // - SE numero negativo || non è un numero
    // - Segnala errore
    console.log("L'array deve avere un numero di elementi valido e maggiore di 0!");
}
