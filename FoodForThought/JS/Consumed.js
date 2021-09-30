function choose(val) {
    if (val == "apple") {
        document.getElementById('apple1').style.display = "none";
        document.getElementById('apple2').style.display = "block";
    }

    else if (val == "banana") {
        document.getElementById('banana1').style.display = "none";
        document.getElementById('banana2').style.display = "block";
    }
}

function clear() {
    a = document.getElementsByClassName('col1');
    b = document.getElementsByClassName('col2');
    for (var i = 0; i < a.length; i++) {
        a[i].style.display = "block";
    }
    for (var i = 0; i < b.length; i++) {
        b[i].style.display = "none";
    }
    document.getElementById('apple').value = 0;
}

function calc() {
    var cal=0, fat=0, pro=0, car=0;
    cal += (document.getElementById('apple').value / 100) * 42;
    fat += (document.getElementById('apple').value / 100) * 0.1;
    pro += (document.getElementById('apple').value / 100) * 0.4;
    car += (document.getElementById('apple').value / 100) * 12;

    cal += (document.getElementById('banana').value / 100) * 95;
    fat += (document.getElementById('banana').value / 100) * 0.3;
    pro += (document.getElementById('banana').value / 100) * 1.2;
    car += (document.getElementById('banana').value / 100) * 23;

    document.getElementById('cal').innerHTML = Math.round(cal*100) / 100;
    document.getElementById('fat').innerHTML = Math.round(fat * 100) / 100;
    document.getElementById('pro').innerHTML = Math.round(pro * 100) / 100;
    document.getElementById('car').innerHTML = Math.round(car * 100) / 100;
}