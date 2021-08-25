//Mail
//chiedi aal'utente la sua mail
//controlla che sia nella lista di chi può accedere
//stampa un messaggio appropriato sull'esito del controllo


//creo una lista mail

var listaMail = ["uno@gmail.com", "due@gmail.com", "tre@gmail.com", "quattro@gmail.com"];

//chiedo all'utente la sua mail

var mailUtente = prompt( "Inserisci la tua mail");

//controllo se la mail inserita è all'interno della lista

var trovato = false;

for ( var i = 0; i < listaMail.length; i++ ){
    if ( listaMail[i] == mailUtente ) {
        trovato = true;
    }
}

//comunico all'utente se può entrare

if (trovato == true) {
    alert("Benvenuta/o!!!");
    document.getElementById("benvenuto").innerHTML = "Benvenuto/a: " + mailUtente;
    console.log(mailUtente);
}else {
    alert("Non sei nella lista! Riprova con un'altra mail");
}
















