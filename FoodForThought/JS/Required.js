function calc() {
    a = document.getElementById('age').value;
    w = document.getElementById('weight').value;
    h = document.getElementById('height').value;
    g = document.getElementById('sel').value;
    if (g == 1) {
        r = 10 * w + 6.25 * h - 5 * a + 5;
        document.getElementById('res').innerHTML = r;
    }
    else {
        r = 10 * w + 6.25 * h - 5 * a - 161;
        document.getElementById('res').innerHTML = r;
    }
}