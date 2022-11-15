// Chiedere all’utente di inserire una parola
let parolaUser = prompt("Inserisci una parola");
// Creare una funzione per capire se la parola inserita è palindroma

let parolaInvertita = reverseStringa(parolaUser);

// Dare output relativo.
if(parolaUser == parolaInvertita){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  


