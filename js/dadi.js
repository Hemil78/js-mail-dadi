//Gioco dei dadi
//generare un numero random da 1 a 6, sia per il giocatore , sia per il computer
//stabilire il vincitore in base a chi fa il punteggio più alto

//chiedo all'utente un primo numero da 1 a 6
var firstNumUtente = parseInt(prompt("Scegli un numero tra 1 2 6"));
console.log(firstNumUtente);

//mi assicuro con un if che i numeri siano tra 1 e 6
if (firstNumUtente > 6) {
    alert("Il numero non è corretto!!! Riprova");
    parseInt(prompt("Scegli un numero tra 1 2 6"));
} 
//genero un secondo numero random da 1 a 6 all'utente
var secondNumUtente = Math.floor(Math.random() * 6) + 1;
console.log(secondNumUtente);

//sommo i due numeri dell'utente
var sommaNumUtente = firstNumUtente + secondNumUtente;
console.log(sommaNumUtente);
document.getElementById("utente").innerHTML += sommaNumUtente;
document.getElementById("utente").style.color = "blue";

//chiedo al cpu un primo numero da 1 a 6
var firstNumCpu = Math.floor(Math.random() * 6) + 1;
console.log(firstNumCpu);

//chiedo al cpu un secondo numero da 1 a 6
var secondNumCpu = Math.floor(Math.random() * 6) + 1;
console.log(secondNumCpu);

//sommo i numeri del cpu
var sommaNumCpu = firstNumCpu + secondNumCpu;
document.getElementById("cpu").innerHTML += sommaNumCpu;
document.getElementById("cpu").style.color = "orange";
console.log(sommaNumCpu);

//confronto i numeri con un if
if(sommaNumUtente > sommaNumCpu) {
    document.getElementById("score").innerHTML = "Hai vinto!!! Bravo";
    document.getElementById("score").style.color = "green";
} else if(sommaNumUtente < sommaNumCpu){
    document.getElementById("score").innerHTML = "Hai Perso. Riprovaci!";
    document.getElementById("score").style.color = "red";
}else{
    document.getElementById("score").innerHTML = "Pareggio! Ritenta!";
}

