// program for a simple calculator using JavaScript
let result;
// take the operator input
const operator = prompt("Enter operator (either +, -, *, or /)");

// take the user input now
const num1 = parseFloat(prompt("Enter your first number :"));
const num2 = parseFloat(prompt("Enter your second number :"));

switch (operator) {
  case "+":
    result = num1 + num2;
    alert(`${num1}  + ${num2} = ${result}`);
    break;

  case "-":
    result = num1 - num2;
    alert(`${num1} - ${num2} = ${result}`);
    break;

  case "*":
    result = num1 * num2;
    alert(` ${num1} * ${num2} = ${result}`);
    break;

  case "/":
    result = num1 / num2;
    alert(` ${num1} / ${num2} = ${result} `);
    break;
    

    default:
        alert('Invalid Operator');
        break;
}
