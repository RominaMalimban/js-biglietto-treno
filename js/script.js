// Devo calcolare il prezzo del biglietto del treno, quindi:

// devo chiedere il numero di Km da percorrere:
let chilometri= parseInt(prompt("Per favore, inserisci il numero di Km che vuoi percorrere"));
console.log(chilometri);

// devo chiedere l'età del pax
let eta = parseInt(prompt("E ora inserisci la tua età"));
console.log(eta);

// creo variabile per prezzo del biglietto per km
let costoPerKm = 0.21;

// devo calcolare il costo totale del biglietto moltiplicando i km per 0.21 euro
let prezzoBiglietto = chilometri * costoPerKm;
console.log(prezzoBiglietto);

// devo creare una variabile per sconto minorenne del 20%:
let scontoMinorenne = prezzoBiglietto * 20 / 100;

// devo creare una variabile per sconto over 65 del 40%:
let scontoSenior = prezzoBiglietto * 40 / 100;


// condizioni:
if (eta < 18){
    console.log((prezzoBiglietto - scontoMinorenne).toFixed(2))
}else if( eta > 65 ){
    console.log((prezzoBiglietto - scontoSenior).toFixed(2))
}else{
    console.log(prezzoBiglietto.toFixed(2))
}



// output: prezzo finale con massimo due numeri decimali. 