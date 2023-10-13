function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const expression = document.getElementById("display").value;
    const numbers = expression.match(/\d+/g) || [];
    const operators = expression.match(/[+\-*/]/g) || [];
    
    let result = parseFloat(numbers[0]);
    
    for (let i = 0; i < operators.length; i++) {
        const number = parseFloat(numbers[i + 1]);
        const operator = operators[i];
        
        if (operator === '+') {
            result += number;
        } else if (operator === '-') {
            result -= number;
        } else if (operator === '*') {
            result *= number;
        } else if (operator === '/') {
            if (number !== 0) {
                result /= number;
            } else {
                result = "Error";
                break;
            }
        }
    }

    document.getElementById("display").value = result;
}

