

// Opret et select html-element, som viser alle 12 månedsnavne og deres index som value.

let monedsNavne = ['Januar', 'Februar', 'Marts', 'April', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];

let ex1 = () => {

    let select = document.createElement('SELECT');


    for (let i = 0; i < monedsNavne.length; i++) {
        var option = document.createElement('OPTION');
        var tekst = document.createTextNode(i + '. ' + monedsNavne[i]);
        option.appendChild(tekst);
        select.appendChild(option);
    }


    document.body.appendChild(select);
}

ex1();







