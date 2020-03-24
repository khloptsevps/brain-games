import getRandomNumber from '../utils/math.js';
import RunGameEngine from '../index.js';

// buildMathProgression
const buildProgression = (begin, step, length) => {
  let item = begin;
  const result = [];
  for (let i = 1; i <= length; i += 1) {
    result.push(item);
    item += step;
  }
  return result;
};

// game task
const task = 'What number is missing in the progression?';

// game logic
const gameProgression = () => {
  const progression = buildProgression(getRandomNumber(0, 100), getRandomNumber(1, 5), 10);
  const index = getRandomNumber(0, 9);
  const answer = progression[index];
  const question = progression
    .map((item) => ((item === answer) ? '..' : item))
    .join(' ');
  return [question, String(answer)];
};

// game start
export default () => RunGameEngine(task, gameProgression);
