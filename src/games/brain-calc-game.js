import pairs from '@hexlet/pairs';
import getRandomNumber from '../utils/math.js';
import gameEngine from '../index.js';

// sum two elements
const sum = (a, b) => a + b;

// multiply two element
const multiply = (a, b) => a * b;

// subtract two elements
const subtract = (a, b) => a - b;

// get random operator
const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomize = getRandomNumber(0, 2);
  return operators[randomize];
};
// game rule
const gameRule = 'What is the result of the expression?';

// game
const gameCalc = () => {
  let correctAnswer = 0;
  const pair = pairs.cons(getRandomNumber(1, 25), getRandomNumber(1, 20));
  const operator = getOperator();
  switch (operator) {
    case '+':
      correctAnswer = sum(pairs.car(pair), pairs.cdr(pair));
      break;
    case '-':
      correctAnswer = subtract(pairs.car(pair), pairs.cdr(pair));
      break;
    default:
      correctAnswer = multiply(pairs.car(pair), pairs.cdr(pair));
  }
  const expression = `${pairs.car(pair)} ${operator} ${pairs.cdr(pair)}`;
  return [expression, String(correctAnswer)];
};

export default () => gameEngine(gameRule, gameCalc);
