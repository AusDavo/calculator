// Get the calculator display element
const calculatorDisplay = document.querySelector(".calculator-display span");

// Get the buttons
const numericButtons = document.querySelectorAll(".keys.numeric");
const clearButton = document.querySelector(".keys.clear");
const equalsButton = document.querySelector(".keys.equals");
const operatorButtons = document.querySelectorAll(".keys.operator");
const deleteButton = document.getElementById("key-delete");

// Initialize certain values
let inputCounter = 0;
let display = "0";
let functionCounter = 0;
let functionType = "equals";
calculatorDisplay.textContent = display;
let firstNumber = 0;
let secondNumber = 0;

// Mathematical functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const equals = (a, b) => b;

// Apply desired operation
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

// Handle the arguments and display the result
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
            inputCounter += 1;
        } else {
            firstNumber = parseFloat(display);
            display = buttonValue;
            inputCounter += 1;
        }
    }
    calculatorDisplay.textContent = display;
  });
});

// Add click event listener to the delete button
deleteButton.addEventListener("click", () => {
  display = display.slice(0, -1);
  calculatorDisplay.textContent = display;
});

// Add click event listener to the clear button
clearButton.addEventListener("click", () => {
  inputCounter = 0;
  display = "0";
  functionCounter = 0;
  calculatorDisplay.textContent = display;
});

// Add click event listener to the operator buttons
operatorButtons.forEach(button => {
  button.addEventListener("click", e => {
    if (inputCounter !== 0) {
      handleArgumentsDisplay();
      functionType = e.target.dataset.functionType;
      inputCounter = 0;
    }
  });
});

// Add click event listener to the equals button
equalsButton.addEventListener("click", () => {
  if (inputCounter !== 0) {
    handleArgumentsDisplay();
    functionType = "equals";
    inputCounter = 0;
  }
});

document.addEventListener("keydown", (event) => {
  // Extracting the logic of handling the different key presses into separate functions
  handleEnterKeyPress(event);
  handleEscapeKeyPress(event);
  handleNumericKeyPress(event);
  handleOperatorKeyPress(event);
  handleBackspaceKeyPress(event);
});

function handleEnterKeyPress(event) {
  if (event.key === "Enter" && insistNumericInput === 0) {
    handleArgumentsDisplay();
    functionType = "equals";
    inputCounter = 0;
  }
};

function handleEscapeKeyPress(event) {
  if (event.code === "Escape") {
    // Reset calculator display to zero
    inputCounter = 0;
    display = 0;
    functionCounter = 0;
    calculatorDisplay.textContent = display;
  }
};

function handleNumericKeyPress(event) {
  if (/[0-9]|\./.test(event.key)) {
    // Handle the numeric key press
    const buttonValue = event.key;
    // Update the calculator display's textContent
    if (buttonValue !== "." || buttonValue === "." && !display.includes(".")) {
      if (inputCounter !== 0 || buttonValue === ".") {
        display += buttonValue;
        inputCounter += 1;
      } else {
        firstNumber = parseFloat(display);
        display = buttonValue;
        inputCounter += 1;
      }
    }
    calculatorDisplay.textContent = display;
    insistNumericInput = 0;
  }
};

function handleOperatorKeyPress(event) {
  if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
    if (insistNumericInput === 0) {
      handleArgumentsDisplay();
      switch (event.key) {
        case "+":
          functionType = "add";
          break;
        case "-":
          functionType = "subtract";
          break;
        case "*":
          functionType = "multiply";
          break;
        case "/":
          functionType = "divide";
          break;
      }
      inputCounter = 0;
      insistNumericInput = 1;
    }
  }
};

function handleBackspaceKeyPress (event) {
  if (event.key === "Backspace") {
    display = display.slice(0, -1);
      calculatorDisplay.textContent = display;
  }
}