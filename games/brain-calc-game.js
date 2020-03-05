import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

// secondary functions
const getNumber = () => {
  const randomNumber = Math.floor((Math.random() * 99) + 1);
  return randomNumber;
};

const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

const subtract = (a, b) => a - b;

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomize = Math.floor(Math.random() * 3);
  return operators[randomize];
};

export const ruleBrainCalcGame = () => 'What is the result of the expression?';

// game
export default () => {
  const result = [];
  let correctAnswer = 0;
  const pair = pairs.cons(getNumber(), getNumber());
  const operator = getOperator();
  if (operator === '+') {
    correctAnswer = sum(pairs.car(pair), pairs.cdr(pair));
  } else if (operator === '-') {
    correctAnswer = subtract(pairs.car(pair), pairs.cdr(pair));
  } else {
    correctAnswer = multiply(pairs.car(pair), pairs.cdr(pair));
  }
  const userAnswer = Number(readlineSync.question(`Question: ${pairs.car(pair)} ${operator} ${pairs.cdr(pair)}\nYour answer: `));
  result.push(userAnswer, correctAnswer);
  return result;
};
