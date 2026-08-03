const click = document.getElementById('audio');
// numbers
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const clear = document.getElementById('clear');
// operators
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');

const display = document.getElementById('display');
const history = document.getElementById('history');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    click.currentTime = 0;
    click.play();
  });
});

const operatorarray = ['+', '-', '*', '/', '.'];

let number1 = "";
let number2 = "";
let currentNumber = 1;
let operator = "";

function changeNumber(x) {
  if (currentNumber === 1) {
    number1 += x;
  } else {
    number2 += x;
  }
}

one.addEventListener('click', () => {
    changeNumber('1');
    display.textContent += '1';
});
two.addEventListener('click', () => {
  changeNumber('2');
  display.textContent += '2';
});
three.addEventListener('click', () => {
  changeNumber('3');
  display.textContent += '3';
});
four.addEventListener('click', () => {
  changeNumber('4');
  display.textContent += '4';
});
five.addEventListener('click', () => {
  changeNumber('5');
  display.textContent += '5';
});
six.addEventListener('click', () => {
  changeNumber('6');
  display.textContent += '6';
});
seven.addEventListener('click', () => {
  changeNumber('7');
  display.textContent += '7';
});
eight.addEventListener('click', () => {
  changeNumber('8');
  display.textContent += '8';
});
nine.addEventListener('click', () => {
  changeNumber('9');
  display.textContent += '9';
});
zero.addEventListener('click', () => {
  changeNumber('0');
  display.textContent += '0';
});
clear.addEventListener('click', () => {
  display.textContent = '';
  number1 = "";
  number2 = "";
  currentNumber = 1;
});
decimal.addEventListener('click', () => {
    if (!(number1.includes('.') && currentNumber === 1) && !(number2.includes('.') && currentNumber === 2)) {
        display.textContent += '.';
        changeNumber('.');
    }
});
add.addEventListener('click', () => {
 if (operator === "") {
  operator = '+';
  display.textContent += '+';
  currentNumber = 2;
 }
});
subtract.addEventListener('click', () => {
  if (operator === "") {
    operator = '-';
    display.textContent += '-';
    currentNumber = 2;
  }
});
multiply.addEventListener('click', () => {
  if (operator === "") {
    operator = '*';
    display.textContent += '*';
    currentNumber = 2;
  }
});
divide.addEventListener('click', () => {
    if (operator === "") {  
  operator = '/';
  display.textContent += '/';
  currentNumber = 2;
  }
});
equals.addEventListener('click', () => {
    if (number1 !== "" && number2 !== "" && operator !== "") {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(number1) + parseFloat(number2);
                break;
            case '-':
                result = parseFloat(number1) - parseFloat(number2);
                break;
            case '*':
                result = parseFloat(number1) * parseFloat(number2);
                break;
            case '/':
                result = parseFloat(number1) / parseFloat(number2);
                break;
        }
        history.innerHTML += `${number1} ${operator} ${number2} = ${result}<br>`;
        display.textContent = result;
        number1 = result.toString();
        number2 = "";
        currentNumber = 1;
        operator = "";
    }
});
