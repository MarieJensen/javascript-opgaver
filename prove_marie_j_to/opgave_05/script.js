

let minListe = document.querySelector('#min_liste');
console.log(minListe);

//  Opret et array bestående af de 7 ugedage
let ugedage = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
console.log(ugedage);

// Udskriv alle ugedage med en for-løkke.
for (let i = 0; i < ugedage; i++) {
    console.log(i);
}

// Udskriv alle ugedage med en forEach.
ugedage.forEach(function (navn) {
    minListe.innerHTML += `<li> ${navn} </li>`;
});


// Udskriv alle ugedage i omvendt rækkefølge
var omvendt = ugedage.reverse();
omvendt.forEach(function (dag) {
    console.log(dag);
})


// Udskriv ugedagene i tilfældig rækkefølge.
for (let i = ugedage.length - 1; i > 0; i--) {
    var random = Math.floor(Math.random() * (i + 1));
    var gem = ugedage[i];
    ugedage[i] = ugedage[random];
    ugedage[random] = gem;
    console.log(ugedage[i]);

}

// Udskriv ugedagen i dag
let now = new Date();
alert(now);



