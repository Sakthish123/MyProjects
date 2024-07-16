const display = document.getElementById("display");

function Click(input) {
    display.textContent += input;
}

function Clear() {
    display.textContent = "";
}

function Calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (err) {
        display.textContent = "Error";
    }
}
