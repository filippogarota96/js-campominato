/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/


// creo un array che contiene le bombe

var bombe = [];

// genero i numeri casuali
function random(min, max) {
   return Math.floor(Math.random()* (max - min + 1) + min);
 };

// inserisco i numeri nell'array
for ( i = 0; i <= 16 - 1; i++) {
  var randomNumber = bombe.push(random(1,100));
}

// controllo che i numeri siano tutti diversi

for (var i = 0; i < bombe.length; i++) {
  if (bombe[i] === bombe[i]) {
     bombe[i] = Math.floor(Math.random() * 100 + 1);
  }
}

console.log(bombe);
