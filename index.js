function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}

function operate(operator, num1, num2) {
    if(operator === "+") add(num1, num2);
    else if(operator === "-") subtract(num1, num2);
    else if(operator === "*") multiply(num1, num2);
    else if(operator === "/") divide(num1, num2);
}

const calcDisplay = document.querySelector('.calcDisplay');
calcDisplay.innerText = "123456";
let displayValue = calcDisplay.textContent;

const btn = document.querySelectorAll('#btn');
btn.forEach(btn => btn.onclick = () => {
    alert('click!');
});
