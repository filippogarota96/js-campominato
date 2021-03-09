/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/


// creo un array che contiene le bombe

function random(min, max) {
  return Math.floor(Math.random()* (max - min + 1) + min);
};
var bombe = [];

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
var numeriInseriti = [];
while (numeriInseriti.length < 3 && controllo) {
  var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 100'));
  // verifico che non inserisca lo stesso numero
  if (numeriInseriti.indexOf(numeroUtente) < 0) {
    numeriInseriti.push(numeroUtente);
    console.log(numeriInseriti);
  } else {
    alert('Hai perso! Non puoi inserire lo stesso numero per più di una volta');
    controllo = false;
  }
  // controllo se il numero inserito è nella lista bombe
  for (var i = 0; i < bombe.length; i++) {
    for (var j = 0; j < numeriInseriti.length; j++) {
    if (bombe[i] == numeriInseriti[j]) {
      alert('Hai perso, Sei saltato in aria!')
      controllo = false;
    }
    if (numeriInseriti.length == 3){
      alert('Hai vinto!');
      controllo = false;
    }
  }
  }
}
