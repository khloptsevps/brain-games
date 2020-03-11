import readlineSync from 'readline-sync';
import getRandomNumber from '../helper/math.js';

// game name
export const gameName = () => 'prime';

// prime check
export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// game
export default () => {
  const result = [];
  const number = getRandomNumber(1, 101);
  let correctAnswer;
  if (isPrime(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
  result.push(userAnswer, correctAnswer);
  return result;
};
