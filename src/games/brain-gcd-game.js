import pairs from '@hexlet/pairs';
import getRandomNumber from '../utils/math.js';
import gameEngine from '../index.js';

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

// game rule
const gameRule = 'Find the greatest common divisor of given numbers.';

// game logic
const gameGcd = () => {
  const pair = pairs.cons(getRandomNumber(1, 101), getRandomNumber(1, 101));
  const correctAnswer = gcd(pairs.car(pair), pairs.cdr(pair));
  const expression = `${pairs.car(pair)} ${pairs.cdr(pair)}`;
  return [expression, String(correctAnswer)];
};

// game start
export default () => gameEngine(gameRule, gameGcd);
