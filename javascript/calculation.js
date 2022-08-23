// Button press Count
let x = 0;
function fivechecker() {
    document.getElementById('p1').setAttribute('disabled', "true");
    document.getElementById('p2').setAttribute('disabled', "true");
    document.getElementById('p3').setAttribute('disabled', "true");
    document.getElementById('p4').setAttribute('disabled', "true");
    document.getElementById('p5').setAttribute('disabled', "true");
    document.getElementById('p6').setAttribute('disabled', "true");
    document.getElementById('p7').setAttribute('disabled', "true");
    document.getElementById('p8').setAttribute('disabled', "true");
    document.getElementById('p9').setAttribute('disabled', "true");
}
// Get the player's name:
document.getElementById('p1').addEventListener('click', function () {
    if (x >= 5) {
        fivechecker()
    }
    else {
        document.getElementById('p1').setAttribute('disabled', "true");
        document.getElementById('p1').style.backgroundColor = "red";
        const playerid = document.getElementById("p1").parentNode.parentNode.childNodes[2].innerText
        const getList = document.getElementById('olist');
        const li1 = document.createElement('li');
        li1.innerText = playerid;
        getList.appendChild(li1);
        x++;
    }
})
document.getElementById('p2').addEventListener('click', function () {
    if (x >= 5) {
        fivechecker()
    }

    else {
        document.getElementById('p2').setAttribute('disabled', "true");
        document.getElementById('p2').style.backgroundColor = "red";
        const playerid = document.getElementById("p2").parentNode.parentNode.childNodes[2].innerText
        const getList = document.getElementById('olist');
        const li1 = document.createElement('li');
        li1.innerText = playerid;
        getList.appendChild(li1);
        x++;
    }
})
document.getElementById('p3').addEventListener('click', function () {
    if (x >= 5) {
        fivechecker()
    }

    else {
        document.getElementById('p3').setAttribute('disabled', "true");
        document.getElementById('p3').style.backgroundColor = "red";
        const playerid = document.getElementById("p3").parentNode.parentNode.childNodes[2].innerText
        const getList = document.getElementById('olist');
        const li1 = document.createElement('li');
        li1.innerText = playerid;
        getList.appendChild(li1);
        x++;
    }
})
document.getElementById('p4').addEventListener('click', function () {
    if (x >= 5) {
        fivechecker()
    }

    else {
        document.getElementById('p4').setAttribute('disabled', "true");
        document.getElementById('p4').style.backgroundColor = "red";
        const playerid = document.getElementById("p4").parentNode.parentNode.childNodes[2].innerText
        const getList = document.getElementById('olist');
        const li1 = document.createElement('li');
        li1.innerText = playerid;
        getList.appendChild(li1);
        x++;
    }
})
document.getElementById('p5').addEventListener('click', function () {
    if (x >= 5) {
        fivechecker()
    }

    else {
        document.getElementById('p5').setAttribute('disabled', "true");
        document.getElementById('p5').style.backgroundColor = "red";
        const playerid = document.getElementById("p5").parentNode.parentNode.childNodes[2].innerText
        const getList = document.getElementById('olist');
        const li1 = document.createElement('li');
        li1.innerText = playerid;
        getList.appendChild(li1);
        x++;
    }
})
document.getElementById('p6').addEventListener('click', function () {
    if (x >= 5) {
        fivechecker()
    }

    else {
        document.getElementById('p6').setAttribute('disabled', "true");
        document.getElementById('p6').style.backgroundColor = "red";
        const playerid = document.getElementById("p6").parentNode.parentNode.childNodes[2].innerText
        const getList = document.getElementById('olist');
        const li1 = document.createElement('li');
        li1.innerText = playerid;
        getList.appendChild(li1);
        x++;
    }
})
document.getElementById('p7').addEventListener('click', function () {
    if (x >= 5) {
        fivechecker()
    }

    else {
        document.getElementById('p7').setAttribute('disabled', "true");
        document.getElementById('p7').style.backgroundColor = "red";
        const playerid = document.getElementById("p7").parentNode.parentNode.childNodes[2].innerText
        const getList = document.getElementById('olist');
        const li1 = document.createElement('li');
        li1.innerText = playerid;
        getList.appendChild(li1);
        x++;
    }
})
document.getElementById('p8').addEventListener('click', function () {
    if (x >= 5) {
        fivechecker()
    }

    else {
        document.getElementById('p8').setAttribute('disabled', "true");
        document.getElementById('p8').style.backgroundColor = "red";
        const playerid = document.getElementById("p8").parentNode.parentNode.childNodes[2].innerText
        const getList = document.getElementById('olist');
        const li1 = document.createElement('li');
        li1.innerText = playerid;
        getList.appendChild(li1);
        x++;
    }
})
document.getElementById('p9').addEventListener('click', function () {
    if (x >= 5) {
        fivechecker()
    }

    else {
        document.getElementById('p9').setAttribute('disabled', "true");
        document.getElementById('p9').style.backgroundColor = "red";
        const playerid = document.getElementById("p9").parentNode.parentNode.childNodes[2].innerText
        const getList = document.getElementById('olist');
        const li1 = document.createElement('li');
        li1.innerText = playerid;
        getList.appendChild(li1);
        x++;
    }
})

// Calculations

document.getElementById('Calculate-total-player-cost').addEventListener('click', function () {
    // Getting the typed value of per player
    const perPlayerContainerString = document.getElementById('cost-per-player').value;
    const perPlayerContainer = parseInt(perPlayerContainerString);
    const totalPlayerCost = perPlayerContainer * 5;

    // Getting the Caltulation result field for total player cost 
    const totalPlayerShowField = document.getElementById('total-player-cost')
    const totalPlayerShowFieldString = totalPlayerShowField.innerText
    const totalPlayerShowFieldNumber = parseInt(totalPlayerShowFieldString);

    const newTotalPlayerCost = totalPlayerShowFieldNumber + totalPlayerCost;
    totalPlayerShowField.innerText = newTotalPlayerCost;
})
