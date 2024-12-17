/*-------------------------------- Constants --------------------------------*/
const displayElement = document.querySelector(".display");
// console.log(displayElement);
const calculator = document.querySelector("#calculator");
// console.log("calculator", calculator);
const buttons = document.querySelectorAll(".button");

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    if (event.target.innerText === "C") {
      // if we click "C", we want to reset and clear the display
      displayElement.textContent = "";
    } else if (event.target.innerText === "=") {
      // if we click "=", we want to compute the answer
      console.log(typeof displayElement.textContent);
      calculateResult(displayElement.textContent);
      console.log(calculateResult(displayElement.textContent));
      displayElement.textContent = calculateResult(displayElement.textContent);
      // after we pressed "=", the next button pressed should clear the display and show the new number
    } else {
      // display the buttons pressed on the display
      displayElement.textContent += event.target.innerText;
    }
    // Future logic to capture the button's value would go here...
  });
});

// this function will take in displayElement textContent, which is X+Y or something
// loop through the displayElement string and find the operator (+-*/)
// store this character in 'operator'
// get the index of 'operator' in the string displayElement
// anything before this index is the first number
// anything after this index is the last number
// use switch case to check what is the sign of the operator
// perform the operations on the firstNum and lastNum based on the operator
// store the answer in result and return it
// this answer is then displayed on displayElement

function calculateResult(statement) {
  let result;
  let indexOfOperator;
    let firstNum;
    let lastNum;
    let operator;
  for (let i=0; i<statement.length;i++) {
    if (statement.charAt(i)==="+" || statement.charAt(i)==="-" ||statement.charAt(i)==="/" ||statement.charAt(i)==="*" ) {
      operator = statement.charAt(i);
      //console.log(operator);
      indexOfOperator = statement.indexOf(operator);
      //console.log(indexOfOperator);
      firstNum=Number(statement.slice(0,indexOfOperator))
      //console.log(firstNum);
      lastNum=Number(statement.slice(indexOfOperator+1,statement.length))
      //console.log(lastNum);
    }
  // result=firstNum+lastNum
  // console.log(result)
    
    
  }
  switch (operator) {
    case "+":
      result = firstNum + lastNum; // use google search to find out how to get a certain character in a string and to convert a string to number
      break;
    case "-":
      result = firstNum - lastNum;
      break;
    case "*":
      result = firstNum * lastNum;
      break;
    case "/":
      result = firstNum / lastNum;
      break;
  }
  return result;
}

