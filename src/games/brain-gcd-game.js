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

// game task
const task = 'Find the greatest common divisor of given numbers.';

// game logic
const generateQuestionAndAnswer = () => {
  const pair = pairs.cons(getRandomNumber(1, 101), getRandomNumber(1, 101));
  const answer = gcd(pairs.car(pair), pairs.cdr(pair));
  const question = `${pairs.car(pair)} ${pairs.cdr(pair)}`;
  return [question, String(answer)];
};

// game start
export default () => console.log(gameEngine(task, generateQuestionAndAnswer));
