import getRandomNumber from '../helper/math.js';
import gameEngine from '../src/index.js';

// game rule
const gameRule = 'Answer "yes" if the number is even, otherwise "no".';

// game
const gameEven = () => {
  const number = getRandomNumber(1, 101);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => gameEngine(gameRule, gameEven);
