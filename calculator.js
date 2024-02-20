let displayNumber = [];
let operateNumber = []; 
let equalNumber = 0;
let operation = "";

function add(a,b) {
    num1 = parseFloat(a.join(""));
    num2 = parseFloat(b.join(""));
    return (num1 + num2);
}

function subtract(a,b) {
    num1 = parseFloat(a.join(""));
    num2 = parseFloat(b.join(""));
    return (num1 - num2);
}

function multiply(a,b) {
    num1 = parseFloat(a.join(""));
    num2 = parseFloat(b.join(""));
    return (num1 * num2);
}

function divide(a,b) {
    num1 = parseFloat(a.join(""));
    num2 = parseFloat(b.join(""));
    if (num2 !== 0) {
        return (num1 / num2);
    } else {
        console.error("Cannot divide by zero");
        return 0;
    }
}

function equal() {
    operate();
    displayNumber = [];
    displayNumber.push(equalNumber.toFixed(3));
}



function operate() {

    if (operation == "+") {
        equalNumber = add(operateNumber,displayNumber);
    } else if (operation == "-") {
        equalNumber = subtract(operateNumber,displayNumber);
    } else if (operation == "*") {
        equalNumber = multiply(operateNumber,displayNumber);
    } else if (operation == "/") {
        equalNumber = divide(operateNumber,displayNumber);
    } 
}

function updateDisplay() {
    document.getElementById("display-number").innerText = displayNumber.join("");
}

function numberPressed(num) {
    displayNumber.push(num);
    updateDisplay();
}

function deleteNum() {
    displayNumber.pop();
    updateDisplay();
}

function signNum() {
    if (displayNumber[0] == "-") {
        displayNumber.shift()
    } else {
        displayNumber.unshift("-")
    }
    updateDisplay();
}

function clearNums() {
    displayNumber = [];
    operateNumber = [];
    equalNumber = 0;

    updateDisplay();
}

function equalPressed() {
    equal();
    updateDisplay();    
}

function operationPressed(op) {
    

    if (operateNumber.length !== 0) {
        equal();
    }

    operation = op;
    operateNumber = displayNumber;
    displayNumber = [];
    updateDisplay();
}


