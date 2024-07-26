document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    let currentOperand = '';
    let previousOperand = '';
    let operation = null;
  
    // current operand
    function appendNumber(number) {
      if (number === '.' && currentOperand.includes('.')) return;
      currentOperand += number;
      updateDisplay();
    }
  
    // current operand
    function updateDisplay() {
      result.value = currentOperand;
    }
  
    // choose an operation
    function chooseOperation(op) {
      if (currentOperand === '') return;
      if (previousOperand !== '') {
        compute();
      }
      operation = op;
      previousOperand = currentOperand;
      currentOperand = '';
    }
  
    // result
    function compute() {
      let computation;
      const prev = parseFloat(previousOperand);
      const current = parseFloat(currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
  
      switch (operation) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case '*':
          computation = prev * current;
          break;
        case '/':
          computation = prev / current;
          break;
        case '%':
          computation = prev % current;
          break;
        default:
          return;
      }
  
      currentOperand = computation.toString();
      operation = null;
      previousOperand = '';
    }
  
    //  clear 
    function clear() {
      currentOperand = '';
      previousOperand = '';
      operation = null;
      updateDisplay();
    }
  
    // Function
    function handleButtonClick(event) {
      const { id } = event.target;
  
      if (id === 'clear') {
        clear();
      } else if (id === 'equal') {
        compute();
        updateDisplay();
      } else if (['add', 'subtract', 'multiply', 'divide', 'modulus'].includes(id)) {
        chooseOperation(event.target.textContent);
      } else {
        appendNumber(event.target.textContent);
      }
    }
  
   
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });
  });
  
