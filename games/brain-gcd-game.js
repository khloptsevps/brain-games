import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';
import { getNumber, gcd } from '../helper/math.js';

// game name
export const gameName = () => 'gcd';

// game
export default () => {
  const result = [];
  const pair = pairs.cons(getNumber(), getNumber());
  const correctAnser = gcd(pairs.car(pair), pairs.cdr(pair));
  const userAnswer = Number(readlineSync.question(`Question: ${pairs.car(pair)} ${pairs.cdr(pair)}\nYour answer: `));
  result.push(userAnswer, correctAnser);
  return result;
};
