import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

// secondary functions
const getNumber = () => {
  const randomNumber = Math.floor((Math.random() * 99) + 1);
  return randomNumber;
};

const gcd = (num1, num2) => {
  let result = 0;
  for (let i = 1; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

export const ruleBrainGcdGame = () => 'Find the greatest common divisor of given numbers.';

// game logic
export default () => {
  const result = [];
  const pair = pairs.cons(getNumber(), getNumber());
  const correctAnser = gcd(pairs.car(pair), pairs.cdr(pair));
  const userAnswer = Number(readlineSync.question(`Question: ${pairs.car(pair)} ${pairs.cdr(pair)}\nYour answer: `));
  result.push(userAnswer, correctAnser);
  return result;
};
