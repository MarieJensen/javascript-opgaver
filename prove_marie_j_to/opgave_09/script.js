

// Deklarér variablen alder og tildel den værdien 20.

// var alder = 20; 
// var alder = 17; 
// console.log(alder);


// // Deklarér variablen besked som en tekststreng med værdien "Velkommen"

// var besked = 'Velkommen'; 
// console.log(besked);


// // Lav en betinget sætning (efter ovenstående variabler), som tjekker om alder er under 18.
// // a. Hvis det er sandt, så skal den overskrive besked variablens indhold og sætte det til
// // "Desværre, du er ikke gammel nok".
// // Beskeden må ikke udskrives her.
// // b. Der skal ikke være nogen else.


// if(alder < 18){
//     console.log('Desværre, du er ikke gammel nok');
// }


// Log variablen besked efter den betingede sætning.
// console.log(besked);

// Lav alderen om til 17 direkte i koden og prøv igen.
// Opgaven er løst når du både har set den udskrive "Velkommen" og "Desværre (…)"
// (dog selvfølgelig ikke samtidig).

var alder = 8;

function knap() {

    if (alder >= 18) {
        document.querySelector('#tekst').innerHTML = 'Velkommen';

    }

    if (alder < 18) {
        document.querySelector('#tekst').innerHTML = 'Desværre, du er ikke gammel nok';

    }

}


