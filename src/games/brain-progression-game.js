import getRandomNumber from '../utils/math.js';
import RunGameEngine from '../index.js';

// buildMathProgression
const buildProgression = (begin, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(begin + i * step);
  }
  return result;
};

// game task
const task = 'What number is missing in the progression?';

// utils
const progressionLength = 10;
const maxBeginItem = 100;
const maxStep = 5;

// game logic
const genGameData = () => {
  const firstItem = getRandomNumber(0, maxBeginItem);
  const progressionStep = getRandomNumber(1, maxStep);
  const progression = buildProgression(firstItem, progressionStep, progressionLength);
  const index = getRandomNumber(0, progressionLength - 1);
  progression[index] = '..';
  const answer = progression[index];
  const question = progression.join(' ');
  return [question, String(answer)];
};

// game start
export default () => RunGameEngine(task, genGameData);
