


//........................... Funktioner som gør at der skiftes til næste side ...........................

function clickedButton() {
    window.location = 'side_to.html'
}
function clickedButton1() {
    window.location = 'side_et.html'
}
function clickedButton2() {
    window.location = 'side_tre.html'
}


//........................... vilidere navne og email felterne ...........................


// Jeg laver en funktion som tjekker om det man skriver i de forskellige felter er rigtigt, fx om der står et navn ved navnefeltet og den tjekker også at der står en email ved emailfeltet.  
function validate(f) {

    if (f.name.value == "") { // Her tjekkes der at der står et navn ved navnefeltet, der skrives to == fordi man spørger om noget.
        message.innerHTML = "Angiv dit navn";//Hvis der ikke står et navn skrives der "angiv dit navn" som er en string da det står i "".   
        f.name.focus(); // Den tager fat i name atributen som hedder name.
        return false;// Den skal retunere at der er en fejl hvis der ikke er et navn
    }

    if (f.email.value == "") {// Her tjekkes der at der står en email ved emailfeltet
        message.innerHTML = "Angiv din email";// Hvis der ikke står en email skrives der "angiv din email" 
        f.email.focus();// Den tager fat i name atributen som hedder email. 
        return false;// Den skal retunere at der er en fejl hvis der ikke er en email
    }

    // Jeg laver to variabler hvor jeg tjekker om emailen indeholder @ og . så den kan bruges fx mariej@hotmail.com

    // Den første variabel kalder jeg atpos som indeholder @. Dette gør at der i emailfeltet skal være et @.  	
    var atpos = f.email.value.indexOf("@");// indexof er en funktion som tæller det tal som  @ tegnet har. Det er nemlig en array som starter ved 0.

    // Denne variabel kalder jeg dotpos. Den gør at der i emailfeltet skal være et . tilsidst. lastindex er index/tallet af det sidste punktom. 	
    var dotpos = f.email.value.lastIndexOf(".");

    // atpos<1 : Her tjekker jeg om @ er det første i emailen. 
    // dotpos<atpos+2: Derefter undersøger jeg at @ står før punktom og at der står min. to tegn efter @ i emailen. 
    // dotpos+2>: Tilsidst undersøger jeg at der står min. to tegn efter punktom i emailen fx mariej@hotmail.com	
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= f.email.value.length) {
        message.innerHTML = "Emailen virker ikke";// Hvis der ikke står @ eller punktom i emailen, skrives der "emailen virker ikke"  										
        f.email.focus();// Den tager fat i name atributen som hedder email. 
        return false;// Den skal retunere at der er en fejl hvis der ikke er et @ eller punktom i emailen.
    }
    else {
        // document.getElementById("toggle").style.visibility = "hidden";
        console.log('Beskeden er sendt'); // Besked til brugeren om at beskeden er sendt
    }

    return true; // Den retunere at der ikke er en fejl. 

}
