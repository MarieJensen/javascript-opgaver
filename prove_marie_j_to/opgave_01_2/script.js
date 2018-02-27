
function sammenlign(tekst1, tekst2) {


    if (tekst1 == tekst2) {
        return true;

    } else {
        return false;

    }
}

let form = document.querySelector('#form');
let tekst1 = form.elements.tekst1;
let tekst2 = form.elements.tekst2;

document.querySelector('#knap').addEventListener('click', (event) => {
    event.preventDefault();
    let test = sammenlign(tekst1.value, tekst2.value);

    if (test == true) {
        document.querySelector('#tekst').innerHTML = 'De er ens';
    } else {
        document.querySelector('#tekst').innerHTML = 'De er IKKE ens';
    }
})

