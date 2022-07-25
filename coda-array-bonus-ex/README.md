# La coda dell'array ex SUPER EXTRA BONUS

- Chiedi all'utente quanti elementi dovrà contenere l'array
    - SE numero negativo || non è un numero
        - Segnala errore
- Chiedi all'utente quanti elementi estrarre
    - SE numero negativo || non è un numero || numero da estrarre > array.length
        - Segnala errore
- Crea l'array contenente tanti elementi quanti ne vuole l'utente
- PER OGNI i = array.length; i > array.length-numero da estrarre ; i--
    - Stampa array[i-1]