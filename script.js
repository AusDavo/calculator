

// Get the calculator display element
const calculatorDisplay = document.querySelector(".calculator-display span");

// Get the buttons
const numericButtons = document.querySelectorAll(".keys.numeric");
const clearButton = document.querySelector(".keys.clear");
const equalsButton = document.querySelector(".keys.equals");
const divideButton = document.querySelector(".keys.divide");
const multiplyButton = document.querySelector(".keys.multiply");
const subtractButton = document.querySelector(".keys.subtract");
const addButton = document.getElementById("key-add");

// Initialize certain values
let inputCounter = 0;
let display = 0;
let functionCounter = 0;
let functionType = "equals";
calculatorDisplay.textContent = display;
let firstNumber = 0;


// Add click event listeners to the numeric buttons
numericButtons.forEach(button => {
  button.addEventListener("click", e => {
    const buttonValue = e.target.textContent;
    // Update the calculator display's textContent
    if (inputCounter !== 0) {
        display += buttonValue;
    } else {
        display = buttonValue;
        console.log(`Display after entering a single digit: ${display}`);
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
    console.log("clicked C");
});

// Add click event listener to the equals button
equalsButton.addEventListener('click', function() {
    if (functionCounter === 0) {
        let firstNumber = display;
        functionCounter += 1;
        functionType = "equals";
    } else {
        console.log(`Function counter: ${functionCounter}`);
        console.log(`Display before doing mathematical function: ${display}`);
        console.log(`firstNumber before doing mathematical function: ${firstNumber}`);
        display = parseInt(display) + firstNumber;
        console.log(`And display before doing mathematical function: ${display}.`);
        calculatorDisplay.textContent = display;
        functionCounter = 0;
        console.log(`You got an answer of ${display}.`)
    }
    inputCounter = 0;
    console.log("clicked equals");
});

// Add click event listener to the add button
addButton.addEventListener('click', function() {
    if (functionCounter === 0) {
        console.log(`firstNumber early add sequence: ${firstNumber}`);
        firstNumber = parseInt(display);
        console.log(`firstNumber mid add sequence: ${firstNumber}`);
        console.log(firstNumber);
        inputCounter = 0;
        functionCounter += 1;
        functionType = "addition";
    }
    console.log("clicked add");
});