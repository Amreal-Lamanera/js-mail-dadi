// console.log('js ok');

const loginMsg = document.querySelector('p');
// console.log(loginMsg)

const registeredMails = ['aaa@a.a', 'bbb@b.b', 'ccc@c.c', 'pieraccini.francesco@gmail.com', 'tutor@boolean.com'];

const yourMail = prompt('Inserisci la tua email');
let loginOk;

for (let i = 0; i < registeredMails.length; i++) {
    if (yourMail === registeredMails[i]) {
        loginOk = true;
    }
}

if (loginOk) {
    loginMsg.append('Utente registrato. Login effettuato.')
} else {
    loginMsg.append('Utente non registrato. Impossibile effettuare Login.')
}