var rok = 1;
var rtimer;
var raudio = document.getElementById("bell");
var rmin = 5;
var rsec = 0;
var rmile = 0;

function rstart() {
    if (rok == 1) {
        rok = 0;
        rtimer = setInterval(() => {
            rmyTimer();
        }, 10);

    }
}

function rmyTimer() {
    rmile -= 1;

    if (rmin <= 0 && rsec <= 0 && rmile <= 0) {
        clearInterval(rtimer);
        rmin = 5;
        rsec = 0;
        rmile = 0;
        rok = 1;
        document.getElementById('right').innerHTML = rmin + ":0" + rsec + ":0" + rmile;
        return false;
    }
    if (rmile < 0) {
        rsec -= 1;
        rmile = 99;
    }
    if (rsec < 0) {
        rmin -= 1;
        rsec = 59
    }

    if (rsec < 10) {
        if (rmile < 10)
            document.getElementById('right').innerHTML = rmin + ":0" + rsec + ":0" + rmile;
        else
            document.getElementById('right').innerHTML = rmin + ":0" + rsec + ":" + rmile;
    } else if (rmile < 10)
        document.getElementById('right').innerHTML = rmin + ":" + rsec + ":0" + rmile;
    else
        document.getElementById('right').innerHTML = rmin + ":" + rsec + ":" + rmile;

    if (rmin == 1 && rsec == 0 && rmile == 0)
        raudio.play();
    else if (rmin == 0 && rsec == 30 && rmile == 0) {
        var index = 0;
        raudio.play();
        setInterval(function () {
            if (index < 1) {
                raudio.play();
                index++;
            }
        }, 1000);
    }
}


function rreset() {
    rmin = 5;
    rsec = 0;
    rmile = 0;
    document.getElementById('right').innerHTML = rmin + ":0" + rsec + ":0" + rmile;
    rpause();
}

function rpause() {
    clearInterval(rtimer);
    rok = 1;
}

function rbellplay() {
    raudio.play();
}
