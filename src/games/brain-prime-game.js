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

// game task
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// game logic
const generateQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 101);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => console.log(gameEngine(task, generateQuestionAndAnswer));
