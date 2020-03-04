import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';
import {
  getName, getNumber, getOperator, sum, multiply, subtract, isRight,
  correct, lose, win, ruleBrainCalcGame,
} from './index.js';

export default () => {
  const name = getName();
  // game logic
  console.log(ruleBrainCalcGame());
  let correctAnswer = 0;
  for (let i = 1; i <= 3; i += 1) {
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
    if (isRight(userAnswer, correctAnswer)) {
      console.log(correct());
    } else {
      return lose(userAnswer, correctAnswer, name);
    }
  }
  return win(name);
};
