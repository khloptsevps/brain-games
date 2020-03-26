import getRandomNumber from '../utils/math.js';
import runGameEngine from '../index.js';

// game task
const task = 'Answer "yes" if the number is even, otherwise "no".';

const isEven = (num) => num % 2 === 0;

// game logic
const genGameData = () => {
  const question = getRandomNumber(1, 101);
  const answer = isEven(question) ? 'yes' : 'no';
  return [String(question), answer];
};

export default () => runGameEngine(task, genGameData);
