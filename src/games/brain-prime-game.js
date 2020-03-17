import getRandomNumber from '../utils/math.js';
import gameEngine from '../index.js';

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
const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// game logic
const gamePrime = () => {
  const number = getRandomNumber(1, 101);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const expression = number;
  return [expression, correctAnswer];
};

export default () => gameEngine(gameRule, gamePrime);
