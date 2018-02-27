

function adresselabe(fornavn, efternavn, vej, husnummer, postnummer, bynavn) {
    return (`Mit navn er  ${fornavn} ${efternavn} jeg bor på ${vej} i ${husnummer} ${postnummer} i ${bynavn} `);

}

var modtaget = adresselabe('Marie', 'Jensen', 'Frimestervej', 73, 2400, 'Nordvest'); // Her kaldes funktionen, return havner i hentDatafunktionen som ligges i variablen modtaget


document.querySelector('#tekst').innerHTML = modtaget;