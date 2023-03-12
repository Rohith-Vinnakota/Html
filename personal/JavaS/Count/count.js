let displayOn = document.getElementById('show-number');
let count = 0;
const increment = () => {
    count++;
    displayOn.textContent = count;
}
const decrement = () => {
    count--;
    displayOn.textContent = count;
    if (count < 0) {
        count = 0;
        displayOn.textContent = count;
        alert("Number not be negative : )")
    }
}
let displaySave = document.getElementById('save-text');
const save = () => {
    displaySave.textContent = "You selected the number " + count + " 🙂";
}
const refresh = () => {
    count = 0;
    displayOn.textContent = count;
    displaySave.textContent = "";
}