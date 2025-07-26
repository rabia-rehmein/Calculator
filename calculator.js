'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const calculator = document.getElementById('calculator');
  const display = document.getElementById('display');
  display.value = '';

  calculator.addEventListener('click', event => {
    const btn = event.target.closest('button');
    if (!btn || !calculator.contains(btn)) return;

    const key = btn.textContent.trim();

    if (key === 'AC' || key === 'C') clearDisplay();
    else if (key === '=') calculateResult();
    else appendToDisplay(key);
  });
});

function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
