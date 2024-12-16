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
// check the 2nd character on the string which is the operator
// switch case on the operator to do the calculations
// takes the first character and third character (which are numbers in string form)
// convert them into numbers
// do the operation and return the result
// but this only works on single digit

function calculateResult(statement) {
  let result;
  switch (statement.charAt(1)) {
    case "+":
      result = Number(statement.charAt(0)) + Number(statement.charAt(2)); // use google search to find out how to get a certain character in a string and to convert a string to number
      break;
    case "-":
      result = Number(statement.charAt(0)) - Number(statement.charAt(2));
      break;
    case "*":
      result = Number(statement.charAt(0)) * Number(statement.charAt(2));
      break;
    case "/":
      result = Number(statement.charAt(0)) / Number(statement.charAt(2));
      break;
  }
  return result;
}

// // testing on new methods i found on google

// let a="123+345";
// // console.group(a.charAt(0)+a.charAt(1))
// // console.log(Number(b)+Number(c))
// // console.log(Number(a.charAt(0))+Number(a.charAt(0)));
// // console.log(a.length);
// console.log(typeof parseInt(a.charAt(5)));
// // console.log(typeof Number(a.charAt(0)))

// // for (let i=0; i<a.length; i++) {
// //   console.log(a.charAt(i));
// // }



// let firstNum="";
// let operator="";
// for (let i=0; i<a.length; i++) {
 
//   if (typeof Number(a.charAt(i)) === "number") {
//     firstNum=firstNum+a.charAt(i);
//   } else {
//     operator=a.charAt(i);
//   }
  
// }
// console.log(firstNum);
// console.log(operator);