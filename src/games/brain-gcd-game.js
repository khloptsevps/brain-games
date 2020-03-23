import getRandomNumber from '../utils/math.js';
import RunGameEngine from '../index.js';

// greatest common devider two numbers
const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

// game task
const task = 'Find the greatest common divisor of given numbers.';

// game logic
const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 101);
  const num2 = getRandomNumber(1, 101);
  const answer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;
  return [question, String(answer)];
};

// game start
export default () => RunGameEngine(task, generateQuestionAndAnswer);
