
document.querySelector('.success').addEventListener('click', (event) => {
    event.preventDefault();
    validate();

});
var alert = document.createElement('DIV');
function validate() {
    alert.innerHTML = '';
    var overskrift = document.ContactForm.overskrift;
    var besked = document.ContactForm.besked;
    var fornavn = document.ContactForm.fornavn;
    var efternavn = document.ContactForm.efternavn;
    var email = document.ContactForm.email;
    var kodeord = document.ContactForm.password;
    var th = document.createElement('TH');
    if (overskrift.value == "") {
        alert.innerHTML = '';
        alert.classList.add('warning');
        alert.style.marginLeft = '40%'
        th.innerHTML += 'Du skal skrive en overskrift<br>';
        alert.appendChild(th);
        document.querySelector('.fejl').appendChild(alert);
    }
    if (besked.value == "") {
        alert.innerHTML = '';
        alert.classList.add('warning');
        alert.style.marginLeft = '40%'
        th.innerHTML += 'Du skal skrive en besked<br>';
        alert.appendChild(th);
        document.querySelector('.fejl').appendChild(alert);
    }

    if (fornavn.value == "") {
        alert.innerHTML = '';
        alert.classList.add('warning');
        alert.style.marginLeft = '40%'
        th.innerHTML += 'Du skal skrive en fornavn<br>';
        alert.appendChild(th);
        document.querySelector('.fejl').appendChild(alert);
    }
    if (efternavn.value == "") {
        alert.innerHTML = '';
        alert.classList.add('warning');
        alert.style.marginLeft = '40%'
        th.innerHTML += 'Du skal skrive en efternavn<br>';
        alert.appendChild(th);
        document.querySelector('.fejl').appendChild(alert);
    }
    if (email.value == "") {
        alert.innerHTML = '';
        alert.classList.add('warning');
        alert.style.marginLeft = '40%'
        th.innerHTML += 'Du skal skrive en email<br>';
        alert.appendChild(th);
        document.querySelector('.fejl').appendChild(alert);
    }
    if (kodeord.value == "") {
        alert.innerHTML = '';
        alert.classList.add('warning');
        alert.style.marginLeft = '40%'
        th.innerHTML += 'Du skal skrive en kodeord<br>';
        alert.appendChild(th);
        document.querySelector('.fejl').appendChild(alert);
    }
    if (alert.innerHTML == '') {
        document.querySelector('.row').remove();
        document.querySelector('.fejl').remove();
        document.body.innerHTML = 'Tak for at udfylde formularen'

    }
}