/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/


// funzione che genera un numero random tra un min e un max
function random(min, max) {
  return Math.floor(Math.random()* (max - min + 1) + min);
};


// creo una funzione che contiene un elemento in array
function includesArray (arr, element) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] == element) {
      return true;
    }
    i++
  }
  return false;
};

// creo un array che contiene le bombe
var bombe = [];

while (bombe.length < 16) {
  var randomNumber = random(1, 100);
  if (bombe.indexOf(randomNumber) < 0) {
    bombe.push(randomNumber);
  }
}

// chiedo all'utente di inserire un numero

var numeroUtente;
var botto = false;
var numeri = [];

while (numeri.length < 10 && botto == false) {
  numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 100'));
  // verifico che non inserisca lo stesso numero
  if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 100) {
    alert('Attento! Inserisci un numero tra 1 e 4!');
  } else if (includesArray(bombe, numeroUtente) == true) {
    botto = true;
  } else if (includesArray(numeri, numeroUtente)) {
    alert( 'Non puoi inserire lo stesso numero per più di una volta');
  } else {
    numeri.push(numeroUtente);
    console.log(numeri);
  }
}


// analizzo il punteggio

if (botto == true) {
  console.log('Hai perso! Hai inserito',  numeri.length, 'numeri validi');
  console.log(bombe);
} else {
  console.log("Hai vinto!");
}
