import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';
import { getRandomNumber } from '../helper/math.js';

// game name
export const gameName = () => 'gcd';

// greatest common devider two numbers
const gcd = (num1, num2) => {
  let result = 0;
  for (let i = 1; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

// game
export default () => {
  const result = [];
  const pair = pairs.cons(getRandomNumber(1, 101), getRandomNumber(1, 101));
  const correctAnser = gcd(pairs.car(pair), pairs.cdr(pair));
  const userAnswer = Number(readlineSync.question(`Question: ${pairs.car(pair)} ${pairs.cdr(pair)}\nYour answer: `));
  result.push(userAnswer, correctAnser);
  return result;
};
