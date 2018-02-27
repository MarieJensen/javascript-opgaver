

// Opret 3 knapper, som har teksterne "A", "B" og "C".
// Når man trykker på en knap, så skal den forsvinde.
// Når alle tre knapper er forvundet, så skal den vise en besked i browseren, hvor der står "Godt klaret".

var i = 0

for (let i = 0; i < 3; i++) {

    let button = document.createElement('button');
    let abc = ['A', 'B', 'C']
    let title = document.createTextNode(abc[i]);
    button.appendChild(title);
    document.body.appendChild(button);
}

document.querySelectorAll('button').forEach(function (knap) {
    knap.addEventListener('click', function () {
        knap.remove();
        if (document.querySelectorAll('button').length === 0) {
            let tekst = document.createTextNode('Godt klaret!');
            document.body.appendChild(tekst);
        }
    })
})



