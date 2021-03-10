/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/

/*all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50*/





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

// Chiedo all'utente di inserire la difficoltà
do {
  var livello = parseInt(prompt("Inserisci un numero tra 0 e 2"))
} while (livello != 0 && livello != 1 && livello != 2 && isNaN(livello))
// creo un array che contiene le bombe
var bombe = [];

// trovo il numero massimo di bombe in base al livello
var maxBombe;
switch (livello) {
  case 0:
    maxBombe = 100;
  break;
  case 1:
    maxBombe = 80;
  break;
  case 2:
    maxBombe = 50;
  break;
  default:

}

while (bombe.length < 16) {
  var randomNumber = random(1, maxBombe);
  if (bombe.indexOf(randomNumber) < 0) {
    bombe.push(randomNumber);
  }
}

// chiedo all'utente di inserire un numero

var numeroUtente;
var botto = false;
var numeri = [];
var safe = maxBombe - 16;
while (numeri.length < 84 && botto == false) {
  numeroUtente = parseInt(prompt('Inserisci un numero'));
  // verifico che non inserisca lo stesso numero
  if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > maxBombe) {
    alert('Attento! Inserisci un numero tra 1 e', maxBombe + '!' );
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
