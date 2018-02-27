

// Opret et array med JSON objekter indeholdende Jimi Hendrix (som ovenfor), Janis Joplin og Jim
// Morrison. Udskriv alle navne på siden.

var personer, i, x = "";
personer = {
    "navne":[ "Jimi Hendrix", "Janis Joplin", "Jim Morrison" ]
};

for (i in personer.navne) {
    x += personer.navne[i] + "<br>";
}

document.getElementById("tekst").innerHTML = x;
