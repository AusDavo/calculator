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
const deleteButton = document.getElementById("key-delete");

// Initialize certain values
let inputCounter = 0;
let display = 0;
let functionCounter = 0;
let functionType = "equals";
calculatorDisplay.textContent = display;
let firstNumber = 0;
let insistNumericInput = 0;

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

const handleArgumentsDisplay = function () {
    if (functionCounter === 0) {
        firstNumber = parseFloat(display);
        functionCounter += 1;
    } else {
        secondNumber = parseFloat(display);
        display = String(applyDesiredOperation(firstNumber, secondNumber, functionType));
        if (display.length > 13) {
            display = display.slice(0, 13);
        }
        calculatorDisplay.textContent = display;
    }
};

// Add click event listeners to the numeric buttons
numericButtons.forEach(button => {
  button.addEventListener("click", e => {
    const buttonValue = e.target.textContent;
    // Update the calculator display's textContent
    if (buttonValue !== "." || buttonValue === "." && !display.includes(".")){
        if (inputCounter !== 0 || buttonValue === ".") {
            display += buttonValue;
            inputCounter =+ 1;
        } else {
            firstNumber = parseFloat(display);
            display = buttonValue;
            inputCounter =+ 1;
        }
    }
    calculatorDisplay.textContent = display;
    insistNumericInput = 0;
  });
});

// Add click event listener to the delete button
deleteButton.addEventListener('click', function() {
  display = display.slice(0, -1);
  calculatorDisplay.textContent = display;
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
  if (insistNumericInput === 0) {
    handleArgumentsDisplay();
    functionType = "equals";
    inputCounter = 0;
  }
});

// Add click event listener to the add button
addButton.addEventListener('click', function() {
  if (insistNumericInput === 0) {
    handleArgumentsDisplay();
    functionType = "add";
    inputCounter = 0;
    insistNumericInput = 1;
  }
});

// Subtract click event listener to the subtract button
subtractButton.addEventListener('click', function() {
  if (insistNumericInput === 0) {
    handleArgumentsDisplay();
    functionType = "subtract";
    inputCounter = 0;
    insistNumericInput = 1;
  }
});

// Multiply click event listener to the multiply button
multiplyButton.addEventListener('click', function() {
  if (insistNumericInput === 0) {
    handleArgumentsDisplay();
    functionType = "multiply";
    inputCounter = 0;
    insistNumericInput = 1;
  }
});

// Divide click event listener to the divide button
divideButton.addEventListener('click', function() {
  if (insistNumericInput === 0) {
    handleArgumentsDisplay();
    functionType = "divide";
    inputCounter = 0;
    insistNumericInput = 1;
  }
});