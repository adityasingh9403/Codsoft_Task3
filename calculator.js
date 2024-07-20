const calcDisplay = document.getElementById('calc-display');
let currentEntry = '';
let previousEntry = '';
let currentOperator = null;

function addNumber(number) {
    currentEntry += number;
    refreshDisplay();
}

function addOperator(op) {
    currentEntry += op;
    refreshDisplay();
}

function addDecimal() {
    if (currentEntry.includes('.')) return;
    currentEntry += '.';
    refreshDisplay();
}

function resetDisplay() {
    currentEntry = '';
    previousEntry = '';
    currentOperator = null;
    refreshDisplay();
}

function removeLast() {
    currentEntry = currentEntry.toString().slice(0, -1);
    refreshDisplay();
}

function computeResult() {
    try {
        currentEntry = eval(currentEntry);
        refreshDisplay();
    } catch (error) {
        currentEntry = 'Error';
        refreshDisplay();
    }
}

function refreshDisplay() {
    calcDisplay.textContent = currentEntry || '0';
}
