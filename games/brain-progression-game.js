import getRandomNumber from '../helper/math.js';
import gameEngine from '../src/index.js';

// buildMathProgression
const buildProgression = () => {
  let begin = getRandomNumber(0, 101);
  const step = Math.floor((Math.random() * 5) + 1);
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
  const result = [];
  const progression = buildProgression();
  const index = getRandomNumber(0, 10);
  const correctAnswer = progression[index];
  const hideNumber = progression.map((item) => {
    let hidedItem = item;
    if (hidedItem === correctAnswer) {
      hidedItem = '..';
    }
    return hidedItem;
  }).join(' ');
  const expression = hideNumber;
  result.push(expression, String(correctAnswer));
  return result;
};

// game start
export default () => gameEngine(gameRule, gameProgression);
