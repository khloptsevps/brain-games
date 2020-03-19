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
// game task
const task = 'What is the result of the expression?';

// game logic
const generateQuestionAndAnswer = () => {
  let answer = 0;
  const pair = pairs.cons(getRandomNumber(1, 25), getRandomNumber(1, 20));
  const operator = getOperator();
  switch (operator) {
    case '+':
      answer = sum(pairs.car(pair), pairs.cdr(pair));
      break;
    case '-':
      answer = subtract(pairs.car(pair), pairs.cdr(pair));
      break;
    default:
      answer = multiply(pairs.car(pair), pairs.cdr(pair));
  }
  const question = `${pairs.car(pair)} ${operator} ${pairs.cdr(pair)}`;
  return [question, String(answer)];
};

export default () => console.log(gameEngine(task, generateQuestionAndAnswer));
