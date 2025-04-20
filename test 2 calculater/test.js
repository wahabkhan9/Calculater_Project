let currentInput = '';
let currentOperation = '';
let previousInput = '';
let calculationHistory = [];

function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculate();
        }
        currentOperation = value;
        previousInput = currentInput;
        currentInput = '';
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function updateDisplay() {
    let displayValue = '';
    if (previousInput !== '') {
        displayValue += previousInput + ' ';
    }
    if (currentOperation !== '') {
        displayValue += currentOperation + ' ';
    }
    displayValue += currentInput;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    previousInput = '';
    updateDisplay();
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    // Store calculation in history
    const calculation = `${previousInput} ${currentOperation} ${currentInput} = ${result}`;
    calculationHistory.push(calculation);
    
    // Update display with result
    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    updateDisplay();
}

function showHistory() {
    const historyPanel = document.getElementById('history-panel');
    const historyList = document.getElementById('history-list');
    
    // Clear previous history list
    historyList.innerHTML = '';
    
    // Add each calculation to the history list
    calculationHistory.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
    
    // Show the history panel
    historyPanel.classList.add('show');
}

function hideHistory() {
    document.getElementById('history-panel').classList.remove('show');
}

function clearHistory() {
    calculationHistory = [];
    document.getElementById('history-list').innerHTML = '';
}