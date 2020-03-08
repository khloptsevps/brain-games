import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';
import {
  getNumber, getOperator, sum, subtract, multiply,
} from '../helper/math.js';

// game name
export const gameName = () => 'calc';

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
