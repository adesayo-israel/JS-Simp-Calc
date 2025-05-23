
let calculation = '';
const display = document.getElementById('display');
const historyList = document.getElementById('history-list');
const clickSound = new Audio('assets/click.mp3');

function updateDisplay(value) {
  display.textContent = value || '0';
}

function append(value) {
  playClick();
  calculation += value;
  updateDisplay(calculation);
}

function calculate() {
  playClick();
  try {
    const result = eval(calculation);
    addToHistory(`${calculation} = ${result}`);
    calculation = result.toString();
    updateDisplay(calculation);
  } catch (e) {
    calculation = '';
    updateDisplay('Error');
  }
}

function clearCalc() {
  playClick();
  calculation = '';
  updateDisplay('0');
}

function addToHistory(entry) {
  const li = document.createElement('li');
  li.textContent = entry;
  historyList.prepend(li);
}

function toggleDark() {
  document.body.classList.toggle('dark');
}

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

document.addEventListener('keydown', (e) => {
  if (!isNaN(e.key) || '+-*/.%'.includes(e.key)) {
    append(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Escape') {
    clearCalc();
  } else if (e.key === 'Backspace') {
    calculation = calculation.slice(0, -1);
    updateDisplay(calculation);
  }
});
