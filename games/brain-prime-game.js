import getRandomNumber from '../helper/math.js';
import gameEngine from '../src/index.js';

// prime check
const isPrime = (num) => {
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

// game rule
const gameRule = () => '\nAnswer "yes" if given number is prime. Otherwise answer "no".\n';

// game logic
const gamePrime = () => {
  const result = [];
  const number = getRandomNumber(1, 101);
  let correctAnswer;
  if (isPrime(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const expression = number;
  result.push(expression, correctAnswer);
  return result;
};

export default () => gameEngine(gameRule(), gamePrime);
