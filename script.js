// Get the calculator display element
const calculatorDisplay = document.querySelector(".calculator-display span");

// Get the numeric buttons
const numericButtons = document.querySelectorAll(".keys.numeric");

// Add click event listeners to the numeric buttons
numericButtons.forEach(button => {
  button.addEventListener("click", e => {
    // Get the button's text content
    const buttonValue = e.target.textContent;

    // Update the calculator display's textContent
    calculatorDisplay.textContent += buttonValue;
  });
});

  // Get the clear button
const clearButton = document.querySelectorAll(".keys.clear");

// Add click event listeners to the numeric buttons
clearButton.forEach(button => {
  button.addEventListener("click", e => {
    
    // Reset calculator display to zero
    calculatorDisplay.textContent = "";
  });
});