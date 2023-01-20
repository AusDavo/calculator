// Get the calculator display element
const calculatorDisplay = document.querySelector(".calculator-display span");

// Get the buttons
const numericButtons = document.querySelectorAll(".keys.numeric");
const clearButton = document.querySelector(".keys.clear");
const equalsButton = document.querySelector(".keys.equals");
const divideButton = document.getElementById("key-divide");
const multiplyButton = document.getElementById("key-multiply");
const subtractButton = document.getElementById("key-subtract");
const addButton = document.getElementById("key-add");

// Initialize certain values
let inputCounter = 0;
let display = 0;
let functionCounter = 0;
let functionType = "equals";
calculatorDisplay.textContent = display;
let firstNumber = 0;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const equals = (a, b) => b;

const applyDesiredOperation = function(firstNumber, secondNumber, functionType) {
  switch (functionType) {
    case "add":
      return add(firstNumber, secondNumber);
    case "subtract":
      return subtract(firstNumber, secondNumber);
    case "multiply":
      return multiply(firstNumber, secondNumber);
    case "divide":
      return divide(firstNumber, secondNumber);
    case "equals":
      return equals(firstNumber, secondNumber);
    default:
      return "Invalid function type.";
  }
};

// Add click event listeners to the numeric buttons
numericButtons.forEach(button => {
  button.addEventListener("click", e => {
    const buttonValue = e.target.textContent;
    // Update the calculator display's textContent
    if (inputCounter !== 0) {
        display += buttonValue;
    } else {
        firstNumber = parseInt(display);
        display = buttonValue;
        inputCounter =+ 1;
    }
    calculatorDisplay.textContent = display;
  });
});

// Add click event listener to the clear button
clearButton.addEventListener('click', function() {
    
    // Reset calculator display to zero
    inputCounter = 0;
    display = 0;
    functionCounter = 0;
    calculatorDisplay.textContent = display;
});

// Add click event listener to the equals button
equalsButton.addEventListener('click', function() {
    if (functionCounter === 0) {
        firstNumber = parseInt(display);
        functionCounter += 1;
    } else {
        secondNumber = parseInt(display);
        display = applyDesiredOperation(firstNumber, secondNumber, functionType);
        calculatorDisplay.textContent = display;
    }
    functionType = "equals";
    inputCounter = 0;
});

// Add click event listener to the add button
addButton.addEventListener('click', function() {
    if (functionCounter === 0) {
        firstNumber = parseInt(display);
        inputCounter = 0;
        functionCounter += 1;
        functionType = "add";
    } else {
        secondNumber = parseInt(display);
        display = applyDesiredOperation(firstNumber, secondNumber, functionType);
        calculatorDisplay.textContent = display;
        functionType = "add";
    }
    inputCounter = 0;
});

// Subtract click event listener to the add button
subtractButton.addEventListener('click', function() {
    if (functionCounter === 0) {
        firstNumber = parseInt(display);
        inputCounter = 0;
        functionCounter += 1;
    } else {
        secondNumber = parseInt(display);
        display = applyDesiredOperation(firstNumber, secondNumber, functionType);
        calculatorDisplay.textContent = display;
    }
    functionType = "subtract";
    inputCounter = 0;
});

// Multiply click event listener to the add button
multiplyButton.addEventListener('click', function() {
    if (functionCounter === 0) {
        firstNumber = parseInt(display);
        inputCounter = 0;
        functionCounter += 1;
    } else {
        secondNumber = parseInt(display);
        display = applyDesiredOperation(firstNumber, secondNumber, functionType);
        calculatorDisplay.textContent = display;
    }
    functionType = "multiply";
    inputCounter = 0;
});

// Divide click event listener to the add button
divideButton.addEventListener('click', function() {
    if (functionCounter === 0) {
        firstNumber = parseInt(display);
        inputCounter = 0;
        functionCounter += 1;
    } else {
        secondNumber = parseInt(display);
        display = applyDesiredOperation(firstNumber, secondNumber, functionType);
        calculatorDisplay.textContent = display;
    }
    functionType = "divide";
    inputCounter = 0;
});