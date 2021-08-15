//Mail
//chiedi aal'utente la sua mail
//controlla che sia nella lista di chi può accedere
//stampa un messaggio appropriato sull'esito del controllo

//creo una lista di mail in array
var listaMail = ["uno@gmail.com", "due@gmail.com", "tre@gmail.com", "quattro@gmail.com"];
console.log ( listaMail );

//chiedi aal'utente la sua mail
var mail = prompt("Inserisci la tua mail");

//se la mail inserita è nella lista
for ( var i = 0; i < listaMail.length; i++ ) {
    if ( listaMail[i] == mail ) {
        document.getElementById("benvenuto").innerHTML = "Benvenuto/a: " + listaMail[i];
    }else {
        prompt("Accesso negato!!! Riprova");
    }
    console.log(mail);
}


















