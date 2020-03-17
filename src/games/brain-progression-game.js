import getRandomNumber from '../utils/math.js';
import gameEngine from '../index.js';

// buildMathProgression
const buildProgression = () => {
  let begin = getRandomNumber(0, 101);
  const step = getRandomNumber(1, 5);
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(begin);
    begin += step;
  }
  return result;
};

// game rule
const gameRule = 'What number is missing in the progression?';

// game
const gameProgression = () => {
  const progression = buildProgression();
  const index = getRandomNumber(0, 9);
  const correctAnswer = progression[index];
  const expression = progression.map((item) => {
    let hidedItem = item;
    if (hidedItem === correctAnswer) {
      hidedItem = '..';
    }
    return hidedItem;
  })
    .join(' ');

  return [expression, String(correctAnswer)];
};

// game start
export default () => gameEngine(gameRule, gameProgression);
