

// Opret 3 knapper, som har teksterne "A", "B" og "C".
// Når man trykker på en knap, så skal den forsvinde.
// Når alle tre knapper er forvundet, så skal den vise en besked i browseren, hvor der står "Godt klaret".
// Rækkefølgen man trykker på knapperne i skal være "CAB".
// Hvis rækkefølgen ikke er korrekt, skal den gøre brugeren opmærksom på dette ved at vise en besked i browseren.

for (let i = 0; i < 3; i++) {

    let button = document.createElement('button'); // Her opretter jeg de 3 knapper i html
    let abc = ['A', 'B', 'C'] // variabel som indeholder et array med A, B og C
    let title = document.createTextNode(abc[i]); // variabel som sætter arrayet sammen med variablen i
    button.appendChild(title); // knapperne får tilføjet et navn, knapperne får navnene A, B og C
    document.body.appendChild(button); // knapperne oprettes i html
}

let tekst = document.querySelector('#tekst'); // variabel som tager fat i id'et tekst i html

function raekkefoelge(knap) { // funktion som hedder rækkefølge og som har parametret knap
    if (document.querySelectorAll('button').length === 3) { // tager fat i alle knapperne

        if (knap.innerHTML === 'C') { // tager fat i knappen som har navnet C
            tekst.innerHTML = '';
            knap.remove(); // fjerner knappen
        }
        else {
            tekst.innerHTML = ''; // hvis der ikke klikkes på knappen C, men på de andre skrives 'rækkefølgen er forkert' 
            let nytekst = document.createTextNode('Rækkefølgen er forkert');
            tekst.appendChild(nytekst); // variablen tekst som tager fat i id'et tekst tilføjer variablen nytekst 
        }

    }
    else if (document.querySelectorAll('button').length === 2) { // tager fat i to af knapperne
        if (knap.innerHTML === 'A') { // tager fat i knappen som har navnet A
            tekst.innerHTML = '';
            knap.remove(); // fjerner knappen 
        }
        else {
            tekst.innerHTML = ''; // hvis der ikke klikkes på knappen A, men på de andre skrives 'rækkefølgen er forkert' 
            let nytekst = document.createTextNode('Rækkefølgen er forkert');
            tekst.appendChild(nytekst); // variablen tekst som tager fat i id'et tekst tilføjer variablen nytekst
        }
    }
    else {
        knap.remove(); // Når der kun er 1 knap tilbage bliver den fjernet hvis man klikker på den
        if (document.querySelectorAll('button').length === 0) { // Når der ikke er flere knapper tilbage skrives 'Godt klaret'
            let nytekst = document.createTextNode('Godt klaret!');
            tekst.appendChild(nytekst);// variablen tekst som tager fat i id'et tekst tilføjer variablen nytekst
        }

    }
}

document.querySelectorAll('button').forEach(function (knap) { // Tager fat i alle knapperne
    knap.addEventListener('click', function () { // giver alle knapperne en eventlistener
        raekkefoelge(knap); // funktionen rækkefølge bliver kaldt her
    })
})


