

// Opret et select html-element, som viser en liste med tallene 1-31.

let ex1 = () => {

    let select = document.createElement('SELECT');


    for (let i = 1; i < 32; i++) {
        var option = document.createElement('OPTION');
        var tekst = document.createTextNode(i);
        option.appendChild(tekst);
        select.appendChild(option);
    }


    document.body.appendChild(select);
}

ex1();











