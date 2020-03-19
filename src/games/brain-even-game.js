import getRandomNumber from '../utils/math.js';
import gameEngine from '../index.js';

// game task
const task = 'Answer "yes" if the number is even, otherwise "no".';

const isEven = (num) => num % 2 === 0;

// game
const questionAndAnswer = () => {
  const question = getRandomNumber(1, 101);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => console.log(gameEngine(task, questionAndAnswer));
