function getTime() {
    var d = new Date();
    d.getFullYear();
    d.getMonth();
    d.getDay();
    d.getHours();
    d.getMinutes();
    d.getSeconds();
    date.innerHTML = "Bilieto įsigyjimo data: " + d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay();
    time.innerHTML = "Bilieto įsigyjimo laikas: " + d.getHours() + " val. " + d.getMinutes() + " min.";

}

function generateRan() {

    //Sugeneruoja masyvą su penkiom skirtingom random reikšmėm iš intervalo [1; 15]:
    var melyna = []
    while (melyna.length < 5) {
        var randomnumber = Math.ceil(Math.random() * 15)
        if (melyna.indexOf(randomnumber) > -1) continue;
        melyna[melyna.length] = randomnumber;
    }

    m1.innerHTML = melyna[0];
    m2.innerHTML = melyna[1];
    m3.innerHTML = melyna[2];
    m4.innerHTML = melyna[3];
    m5.innerHTML = melyna[4];

    var juoda = []
    while (juoda.length < 5) {
        var randomnumber = Math.ceil(Math.random() * 15 + 15)
        if (juoda.indexOf(randomnumber) > -1) continue;
        juoda[juoda.length] = randomnumber;
    }
    j1.innerHTML = juoda[0];
    j2.innerHTML = juoda[1];
    j3.innerHTML = juoda[2];
    j4.innerHTML = juoda[3];
    j5.innerHTML = juoda[4];

    var raudona = []
    while (raudona.length < 5) {
        var randomnumber = Math.ceil(Math.random() * 15 + 30)
        if (raudona.indexOf(randomnumber) > -1) continue;
        raudona[raudona.length] = randomnumber;
    }
    r1.innerHTML = raudona[0];
    r2.innerHTML = raudona[1];
    r3.innerHTML = raudona[2];
    r4.innerHTML = raudona[3];
    r5.innerHTML = raudona[4];

    var geltona = []
    while (geltona.length < 5) {
        var randomnumber = Math.ceil(Math.random() * 15 + 45)
        if (geltona.indexOf(randomnumber) > -1) continue;
        geltona[geltona.length] = randomnumber;
    }
    g1.innerHTML = geltona[0];
    g2.innerHTML = geltona[1];
    g3.innerHTML = geltona[2];
    g4.innerHTML = geltona[3];
    g5.innerHTML = geltona[4];

    var zalia = []
    while (zalia.length < 5) {
        var randomnumber = Math.ceil(Math.random() * 15 + 60)
        if (zalia.indexOf(randomnumber) > -1) continue;
        zalia[zalia.length] = randomnumber;
    }
    z1.innerHTML = zalia[0];
    z2.innerHTML = zalia[1];
    z3.innerHTML = zalia[2];
    z4.innerHTML = zalia[3];
    z5.innerHTML = zalia[4];
}

//Sugeneruoja masyvą nuo 1 iki 75:------------------------------------
function generateArray75() {
    var array75 = Array.from({
        length: 75
    }, (v, i) => i + 1);
    return array75;
}

//Išmėto masyvo elementus random tvarka:------------------------------
var shuffled;

function shuffle(array) {
    var tmp, current, top = array.length;

    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
            shuffled = array;
        }
}
//Padarom 55-tą elementą lygų nuliui, kad jį išridentų pasibaigus žaidimui:

//Paslepia elementą pagal id reikšmę:
function hide(x) {
    document.getElementById(x).style.visibility = 'hidden';
}

//Elementą padaro matomu, pagal id reikšmę:
function unhide(x) {
    document.getElementById(x).style.visibility = 'visible';
}

var counter = 0;
var tusciaKampEilIstr = "";
var tusciaAuksPuod = "";
var tusciaDidPriz = "";
var isriedejo;
var cells;

function roll38() {
    cells = document.getElementById("test").getElementsByTagName("td");
    if (counter < 38) {
        isriedejo = shuffled[counter];


        for (var j = 0; j < cells.length; j++) {
            if (cells[j].innerHTML == isriedejo) {
                cells[j].style.backgroundColor = "#ff00dc";
            }
        }

        if (counter === 0) {
            if (shuffled[counter] < 1) {
                tusciaKampEilIstr = tusciaKampEilIstr + shuffled[counter];
            } else if (shuffled[counter] < 16) {
                tusciaKampEilIstr = tusciaKampEilIstr + "M" + shuffled[counter];
            } else if (shuffled[counter] < 31) {
                tusciaKampEilIstr = tusciaKampEilIstr + "J" + shuffled[counter];
            } else if (shuffled[counter] < 46) {
                tusciaKampEilIstr = tusciaKampEilIstr + "R" + shuffled[counter];
            } else if (shuffled[counter] < 61) {
                tusciaKampEilIstr = tusciaKampEilIstr + "G" + shuffled[counter];
            } else {
                tusciaKampEilIstr = tusciaKampEilIstr + "Z" + shuffled[counter];
            }
        } else {
            if (shuffled[counter] < 1) {
                tusciaKampEilIstr = tusciaKampEilIstr + shuffled[counter];
            } else if (shuffled[counter] < 16) {
                tusciaKampEilIstr = tusciaKampEilIstr + ", M" + shuffled[counter];
            } else if (shuffled[counter] < 31) {
                tusciaKampEilIstr = tusciaKampEilIstr + ", J" + shuffled[counter];
            } else if (shuffled[counter] < 46) {
                tusciaKampEilIstr = tusciaKampEilIstr + ", R" + shuffled[counter];
            } else if (shuffled[counter] < 61) {
                tusciaKampEilIstr = tusciaKampEilIstr + ", G" + shuffled[counter];
            } else {
                tusciaKampEilIstr = tusciaKampEilIstr + ", Z" + shuffled[counter];
            }
        }

        sk1.innerHTML = tusciaKampEilIstr;
        kamuoliukas.innerHTML = isriedejo;
        document.getElementById('kamuoliukas').style.boxShadow = '15px 30px 30px #46224f';
        document.getElementById('kamuoliukas').style.border = "5px solid #420651";
    } else if (counter < 47) {
        if (counter == 38) {
            alert("Baigėme žaisti kampų, eilutės bei įstrižainių žaidimą!");
            if (cells[0].style.backgroundColor == "rgb(255, 0, 220)" && cells[4].style.backgroundColor == "rgb(255, 0, 220)" && cells[20].style.backgroundColor == "rgb(255, 0, 220)" && cells[24].style.backgroundColor == "rgb(255, 0, 220)") {
                alert("SVEIKINAME! Laimėjote KAMPŲ žaidimą. Nesustokite ir bandykite laimėti AUKSO PUODĄ!");
            } else if (cells[10].style.backgroundColor == "rgb(255, 0, 220)" && cells[11].style.backgroundColor == "rgb(255, 0, 220)" && cells[12].style.backgroundColor == "rgb(255, 0, 220)" && cells[13].style.backgroundColor == "rgb(255, 0, 220)" && cells[14].style.backgroundColor == "rgb(255, 0, 220)") {
                alert("SVEIKINAME! Laimėjote EILUTĖS žaidimą. Nesustokite ir bandykite laimėti AUKSO PUODĄ!");
            } else if (cells[0].style.backgroundColor == "rgb(255, 0, 220)" && cells[4].style.backgroundColor == "rgb(255, 0, 220)" && cells[6].style.backgroundColor == "rgb(255, 0, 220)" && cells[8].style.backgroundColor == "rgb(255, 0, 220)" && cells[12].style.backgroundColor == "rgb(255, 0, 220)" && cells[16].style.backgroundColor == "rgb(255, 0, 220)" && cells[18].style.backgroundColor == "rgb(255, 0, 220)" && cells[20].style.backgroundColor == "rgb(255, 0, 220)" && cells[24].style.backgroundColor == "rgb(255, 0, 220)") {
                alert("SVEIKINAME! Laimėjote ĮSTRIŽAINIŲ žaidimą. Nesustokite ir bandykite laimėti AUKSO PUODĄ!");
            } else {
                alert("DEJA, kol kas laimėti nepavyko, bet nenuleiskit rankų ir bandykite laimėti AUKSO PUODĄ!");
            }
            if (shuffled[counter] < 1) {
                tusciaAuksPuod = tusciaAuksPuod + shuffled[counter];
            } else if (shuffled[counter] < 16) {
                tusciaAuksPuod = tusciaAuksPuod + "M" + shuffled[counter];
            } else if (shuffled[counter] < 31) {
                tusciaAuksPuod = tusciaAuksPuod + "J" + shuffled[counter];
            } else if (shuffled[counter] < 46) {
                tusciaAuksPuod = tusciaAuksPuod + "R" + shuffled[counter];
            } else if (shuffled[counter] < 61) {
                tusciaAuksPuod = tusciaAuksPuod + "G" + shuffled[counter];
            } else {
                tusciaAuksPuod = tusciaAuksPuod + "Z" + shuffled[counter];
            }
        } else {
            if (shuffled[counter] < 1) {
                tusciaAuksPuod = tusciaAuksPuod + shuffled[counter];
            } else if (shuffled[counter] < 16) {
                tusciaAuksPuod = tusciaAuksPuod + ", M" + shuffled[counter];
            } else if (shuffled[counter] < 31) {
                tusciaAuksPuod = tusciaAuksPuod + ", J" + shuffled[counter];
            } else if (shuffled[counter] < 46) {
                tusciaAuksPuod = tusciaAuksPuod + ", R" + shuffled[counter];
            } else if (shuffled[counter] < 61) {
                tusciaAuksPuod = tusciaAuksPuod + ", G" + shuffled[counter];
            } else {
                tusciaAuksPuod = tusciaAuksPuod + ", Z" + shuffled[counter];
            }

        }
        isriedejo = shuffled[counter];
        for (var j = 0; j < cells.length; j++) {
            if (cells[j].innerHTML == isriedejo) {
                cells[j].style.backgroundColor = "#8c0277";
            }
        }
        sk2.innerHTML = tusciaAuksPuod;
        kamuoliukas.innerHTML = isriedejo;
        document.getElementById('kamuoliukas').style.boxShadow = '15px 30px 30px #46224f';
        document.getElementById('kamuoliukas').style.border = "5px solid #420651";
    } else if (counter < 56) {
        if (counter == 47) {
            alert("Baigėme žaisti AUKSO PUODO žaidimą!");
        }
        if (counter == 55) {
            shuffled[55] = 0;
            alert("žaidimas baigtas");
        }

        isriedejo = shuffled[counter];

        for (var j = 0; j < cells.length; j++) {
            if (cells[j].innerHTML == isriedejo) {
                cells[j].style.backgroundColor = "#59004c";
            }
        }
        if (counter === 47) {
            if (shuffled[counter] < 1) {
                tusciaDidPriz = tusciaDidPriz + shuffled[counter];
            } else if (shuffled[counter] < 16) {
                tusciaDidPriz = tusciaDidPriz + "M" + shuffled[counter];
            } else if (shuffled[counter] < 31) {
                tusciaDidPriz = tusciaDidPriz + "J" + shuffled[counter];
            } else if (shuffled[counter] < 46) {
                tusciaDidPriz = tusciaDidPriz + "R" + shuffled[counter];
            } else if (shuffled[counter] < 61) {
                tusciaDidPriz = tusciaDidPriz + "G" + shuffled[counter];
            } else {
                tusciaDidPriz = tusciaDidPriz + "Z" + shuffled[counter];
            }
        } else {
            if (shuffled[counter] < 1) {
                tusciaDidPriz = tusciaDidPriz + ", " + shuffled[counter];
            } else if (shuffled[counter] < 16) {
                tusciaDidPriz = tusciaDidPriz + ", M" + shuffled[counter];
            } else if (shuffled[counter] < 31) {
                tusciaDidPriz = tusciaDidPriz + ", J" + shuffled[counter];
            } else if (shuffled[counter] < 46) {
                tusciaDidPriz = tusciaDidPriz + ", R" + shuffled[counter];
            } else if (shuffled[counter] < 61) {
                tusciaDidPriz = tusciaDidPriz + ", G" + shuffled[counter];
            } else {
                tusciaDidPriz = tusciaDidPriz + ", Z" + shuffled[counter];
            }
        }
        sk3.innerHTML = tusciaDidPriz;
        kamuoliukas.innerHTML = isriedejo;
        document.getElementById('kamuoliukas').style.boxShadow = '15px 30px 30px #46224f';
        document.getElementById('kamuoliukas').style.border = "5px solid #420651";
    }

    if (isriedejo < 1) {
        document.getElementById('kamuoliukas').style.backgroundColor = 'white';
    } else if (isriedejo < 16) {
        document.getElementById('kamuoliukas').style.backgroundColor = 'blue';
    } else if (isriedejo < 31) {
        document.getElementById('kamuoliukas').style.backgroundColor = 'black';
    } else if (isriedejo < 46) {
        document.getElementById('kamuoliukas').style.backgroundColor = 'red';
    } else if (isriedejo < 61) {
        document.getElementById('kamuoliukas').style.backgroundColor = 'yellow';
    } else {
        document.getElementById('kamuoliukas').style.backgroundColor = 'green';
    }
    counter++;
}
