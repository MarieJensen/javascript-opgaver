
// Opret JSON objektet { "fornavn": "Jimi", "efternavn": "Hendrix" } og udskriv fulde navn i et
// div-tag på en webside (selvfølgelig med mellemrum imellem fornavn og efternavn).


var person = { "fornavn":"Jimi", "efternavn":"Hendrix"};
for (x in person) {
    document.getElementById("tekst").innerHTML += person[x] += ' ';
}
