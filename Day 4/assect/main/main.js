let outputScreen = document.getElementById("outPut");

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value)
    } catch {
        alert("Invalid Syntax")
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}