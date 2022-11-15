// L’utente sceglie pari o dispari 
let scelta = prompt("Scegli Pari o Dispari");

// inserisce un numero da 1 a 5.
let numeroUser = parseInt(prompt("inserisci un unmero da 1 a 5"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let numeroPC = intRandom(1,5);
console.log("il pc ha scelto: ",numeroPC,"la tua scelta:", scelta,"il tuo numero: ", numeroUser);
// Sommiamo i due numeri
let sommaNum = somma(numeroUser,numeroPC)

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
let sommaPD = pariDispari(sommaNum);
console.log(sommaNum);
// Dichiariamo chi ha vinto.
if (scelta === sommaPD) {
  console.log("Hai Vinto");
} else { console.log("Hai perso");}


