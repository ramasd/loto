var x = Math.floor((Math.random() * 100) + 1);
var i = 0;

function spek() {

    var skaicius = document.getElementById("skaicius").value;
    if (skaicius < 1 || skaicius > 100) {
        alert("Įvestas skaičius turi priklausyti intervalui nuo 1 iki 100.");
        i++;
    } else if (x < skaicius) {
        document.getElementById("ats").innerHTML = "x < " + skaicius;
        document.getElementById("correct").innerHTML = "";
        i++;
    } else if (x > skaicius) {
        document.getElementById("ats").innerHTML = "x > " + skaicius;
        document.getElementById("correct").innerHTML = "";
        i++;
    } else {
        i++;
        document.getElementById("ats").innerHTML = "";
        document.getElementById("ats").innerHTML = "...";
        document.getElementById("correct").innerHTML = "<h3>Teisingai!</h3>" + "<h2>x = <b>" + x + "</b></h2><br />Atspėjote iš " + "<b>" + i + "</b>" + "-ojo karto.";
    }
}
