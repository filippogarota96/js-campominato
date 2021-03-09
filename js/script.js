/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/


// creo un array che contiene le bombe
var bombe = [];

function random(min, max) {
  return Math.floor(Math.random()* (max - min + 1) + min);
};

while (bombe.length < 16) {
  var randomNumber = random(1, 100);
  if (bombe.indexOf(randomNumber) < 0) {
    bombe.push(randomNumber);
  }
}
console.log(bombe);
// chiedo all'utente di inserire un numero
var numeroUtente;
var controllo = true;
var numeri = [];
while (numeri.length <= 84 && controllo) {
  numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 100'));
  // verifico che non inserisca lo stesso numero
  if (numeri.indexOf(numeroUtente) < 0) {
    numeri.push(numeroUtente);
  } else {
    alert('Hai perso! Non puoi inserire lo stesso numero per più di una volta');
    controllo = false;
  }
  // controllo se il numero inserito è nella lista bombe
    if (bombe.includes(numeroUtente)) {
      controllo = false;
      alert('Hai perso!')
    }
    if (numeri.length == 84){
      controllo = false;
      console.log(controllo);
      alert('Hai vinto!');
    }

}
