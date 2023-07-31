const calcDisplay = document.querySelector('.calcDisplay');
calcDisplay.innerText = "0";
let displayValue;
let num1 = 0;
let num2 = 0;
let operator = '';
let result = 0;

const numberButton = document.querySelectorAll('#numBtn');
const operatorButton = document.querySelectorAll('#opbtn');
const clearButton = document.querySelector('#clrbtn');
clearButton.onclick = () => clrButton();


// Operations to perform after numbers are entered
function add(num1, num2) {
    result = num1 + num2;
    calcDisplay.innerText = result;
}

function subtract(num1, num2) {
    result = num1 - num2;
    calcDisplay.innerText = result;
}

function multiply(num1, num2) {
    result = num1 * num2;
    calcDisplay.innerText = result;
}

function divide(num1, num2) {
    result = num1 / num2;
    calcDisplay.innerText = result;
}

///////////////////////////////

// Decide what to do with the given numbers
function operate(operator, num1, num2) {
    if(operator == '+') {
        add(num1, num2);
    } else if(operator === "-") {
        subtract(num1, num2);
    } else if(operator === "*") {
        multiply(num1, num2);
    } else if(operator === "/") {
        divide(num1, num2);
    }
}

// Identifies button pressed is a number
function numButton(number) {
    if(calcDisplay.innerText == '0') calcDisplay.innerText = '';
    calcDisplay.innerText += number;
}

// Identifies button pressed is an operator
function opButton(op) {
    // If an operator btn (not =) is pushed,
    // store number in variables
    if(op != '=') {
        operator = op;
        num1 = Number(calcDisplay.innerText);
        calcDisplay.innerText = 0;
    } else if(op == '=') {
        if(num2 == 0) {
            num2 = Number(calcDisplay.innerText);
            calcDisplay.innerText = 0;
        }
        operate(operator, num1, num2);
    }
}

function clrButton() {
    calcDisplay.innerText = 0;
    num1 = 0;
    num2 = 0;
    operator = '';
    result = 0;
}

numberButton.forEach(btn => btn.onclick = () => {
    numButton(btn.textContent);
    displayValue = calcDisplay.innerText;
});

operatorButton.forEach(btn => btn.onclick = () => {
    opButton(btn.textContent);
    displayValue = calcDisplay.innerText;
});
