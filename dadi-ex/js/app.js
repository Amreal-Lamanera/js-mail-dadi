// console.log('js ok');

const btnElement = document.querySelector('button');
const yourResult = document.getElementById('your-result');
const myResult = document.getElementById('my-result');
const winner = document.getElementById('winner');

// console.log(btnElement);
btnElement.addEventListener('click', function () {
    // console.log('js ok2');
    // - Genera un numero per il giocatore
    const playerNum = Math.floor(Math.random() * 6) + 1;
    yourResult.innerHTML = 'Hai fatto: ' + playerNum;
    // console.log(playerNum);
    // - Genera un numero per il computer
    const pcNum = Math.floor(Math.random() * 6) + 1;
    myResult.innerHTML = 'Io ho fatto: ' + pcNum;

    // - SE playerNum > pcNum
    if (playerNum > pcNum) {
        // - allora giocatore vince
        winner.innerHTML = 'Hai vinto!';
    } // - ALTRIMENTI SE playerNum > pcNum 
    else if (playerNum < pcNum) {
        // - Allora computer vince
        winner.innerHTML = 'Hai perso!';
    } // - ALTRIMENTI
    else {
        // - Pareggio
        winner.innerHTML = 'Pareggio!';
    }
})