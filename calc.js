// Variables to hold current state
let currentInput = '';
let previousInput = '';
let operator = null;

// Function to append number or decimal
function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return;
  currentInput += number;
}

// Function to choose operation
function chooseOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    compute();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

// Function to compute result
function compute() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
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
      result = current === 0 ? 'Error' : prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
}

// Function to clear everything
function clear() {
  currentInput = '';
  previousInput = '';
  operator = null;
}

// Function to update display (you’ll call this in your DOM logic)
function getDisplayValue() {
  return currentInput || '0';
}
