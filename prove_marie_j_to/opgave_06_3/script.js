

// Opret et select html-element, som viser nuværende årstal og 30 år tilbage.

let date = new Date();
let year = date.getFullYear();

let ex1 = () => {

    let select = document.createElement('SELECT');

    for (let i = year; i > year - 31; i--) {
        var option = document.createElement('OPTION');
        var tekst = document.createTextNode(i);
        option.appendChild(tekst);
        select.appendChild(option);
    }

    document.body.appendChild(select);
}

ex1();









