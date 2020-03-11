import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';
import { getRandomNumber } from '../helper/math.js';

// game name
export const gameName = () => 'calc';

// sum two elements
const sum = (a, b) => a + b;

// multiply two element
const multiply = (a, b) => a * b;

// subtract two elements
const subtract = (a, b) => a - b;

// get random operator
const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomize = getRandomNumber(0, 3);
  return operators[randomize];
};

// game
export default () => {
  const result = [];
  let correctAnswer = 0;
  const pair = pairs.cons(getRandomNumber(0, 50), getRandomNumber(0, 50));
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
