// Devo calcolare il prezzo del biglietto del treno, quindi:


// devo chiedere il numero di Km da percorrere:
let chilometri= parseInt(prompt("Per favore, inserisci il numero di Km che vuoi percorrere"));
console.log(chilometri);

// devo chiedere l'età del pax
let eta = parseInt(prompt("E ora inserisci la tua età"));
console.log(eta);

// creo variabile per prezzo del biglietto per km
let costoPerKm = 0.21;

// devo calcolare il costo totale del biglietto moltiplicando i km per 0.21 €
let prezzoBiglietto = (chilometri * costoPerKm).toFixed(2);
console.log(prezzoBiglietto);

// devo creare una variabile per sconto minorenne del 20%:
let scontoMinorenne = prezzoBiglietto * 20 / 100;

// devo creare una variabile per sconto over 65 del 40%:
let scontoSenior = prezzoBiglietto * 40 / 100;

// condizioni:
if (eta < 18){
    let prezzoMinorenne = (prezzoBiglietto - scontoMinorenne).toFixed(2);
    // output:
    document.getElementById("text").innerHTML = `Vuoi percorrere ${chilometri}km e il prezzo del tuo biglietto è di ${prezzoBiglietto}€. Dal momento che hai ${eta} anni, hai diritto ad uno sconto del 20%, quindi il prezzo totale è di ${prezzoMinorenne}€.`;
}else if( eta > 65 ){
    let prezzoSenior = (prezzoBiglietto - scontoSenior).toFixed(2);
    // output:
    document.getElementById("text").innerHTML = `Vuoi percorrere ${chilometri}km e il prezzo del tuo biglietto è di ${prezzoBiglietto}€. Dal momento che hai ${eta} anni, hai diritto ad uno sconto del 40%, quindi il prezzo totale è di ${prezzoSenior}€.`;
}else{
    prezzoBiglietto;
    // output:
    document.getElementById("text").innerHTML = `Vuoi percorrere ${chilometri}km e il prezzo del tuo biglietto è di ${prezzoBiglietto}€. Dal momento che hai ${eta} anni, non hai diritto a nessuno sconto. Ritenta il prossimo anno!`;
}
