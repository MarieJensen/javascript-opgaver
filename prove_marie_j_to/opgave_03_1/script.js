
var prisUdenMoms = 200;
var pris_med_moms = prisMedMoms(prisUdenMoms)


function prisMedMoms(pris) {
    var moms = 1.25
    pris_med_moms = moms * prisUdenMoms;
    return pris_med_moms

}


document.querySelector('#tekst').innerHTML = 'Pris med moms ' + pris_med_moms;
