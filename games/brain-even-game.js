import getRandomNumber from '../helper/math.js';
import gameEngine from '../src/index.js';

// even number check
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

// game rule
const gameRule = () => '\nAnswer "yes" if the number is even, otherwise "no".\n';

// game
const gameEven = () => {
  const result = [];
  const number = getRandomNumber(1, 101);
  let correctAnswer;
  if (isEven(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  result.push(number, correctAnswer);
  return result;
};

export default () => gameEngine(gameRule(), gameEven);
