
// App variables
let currentRandom = (Math.floor(Math.random() * 100)),
currentNumber,
previousNumber,
count;

//DOM Variables
let submitButton = document.getElementById("submit-button"),
    checkNumber = document.getElementById("check-number"),
    textArea = document.getElementById("text-area");

submitButton.addEventListener("click", function() {
  currentNumber = checkNumber.value;
  if (currentNumber < currentRandom) {
    textArea.innerText = "Cold"
    }
    else if (currentNumber > currentRandom) {
      textArea.innerText = "Hot"
    }
    else {
      textArea.innerText = "You Win! \n Enter New Number";
      currentRandom = (Math.floor(Math.random() * 100));
    };
    
  return currentNumber;
});

console.log(currentRandom);









