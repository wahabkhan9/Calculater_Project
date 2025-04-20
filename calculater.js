let display = document.getElementById('display');
let calculator = document.getElementById('calculator');
let currentInput = '';
let operation = '';
let firstOperand = '';
let history = [];

function appendNumber(num) {
  currentInput += num;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  firstOperand = '';
  operation = '';
  display.textContent = '0';
}

function setOperation(op) {
  if (currentInput === '') return;
  operation = op;
  firstOperand = currentInput;
  currentInput = '';
}

function calculate() {
  if (currentInput === '' || firstOperand === '' || operation === '') return;
  let result;
  let a = parseFloat(firstOperand);
  let b = parseFloat(currentInput);

  switch (operation) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : 'Err'; break;
  }

  display.textContent = result;
  history.push(`${firstOperand} ${operation} ${currentInput} = ${result}`);
  currentInput = result.toString();
  firstOperand = '';
  operation = '';
}

function showHistory() {
  alert(history.join('\n') || 'No history yet');
}

function minimizeCalc() {
  calculator.classList.remove('maximized');
  calculator.classList.toggle('minimized');
    
}

function maximizeCalc() {
  calculator.classList.remove('minimized');
  calculator.classList.toggle('maximized');
}