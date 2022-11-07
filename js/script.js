// Devo calcolare il prezzo del biglietto del treno, quindi:

// devo chiedere il numero di Km da percorrere:
let chilometri= parseInt(prompt("Per favore, inserisci il numero di Km che vuoi percorrere"));
console.log(chilometri);

// devo chiedere l'età del pax
let eta = parseInt(prompt("E ora inserisci la tua età"));
console.log(eta);


// devo calcolare il costo del biglietto moltiplicando i km per 0.21 euro

// condizioni:
// - se eta minore di 18, allora avrà uno sconto del 20%
// - se età maggiore di 65, allora avrà uno sconto del 40%


// output: prezzo finale con massimo due numeri decimali. 