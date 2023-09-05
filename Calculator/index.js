function display(value) {
    document.getElementById("result").value += value;
}
function allclear() {
    document.getElementById("result").value = " ";
}
function answer() {
    let p = document.getElementById('result').value;
    var q = eval(p);
    document.getElementById("result").value = q;
}