import readlineSync from 'readline-sync';
import getRandomNumber from '../helper/math.js';

// game name
export const gameName = () => 'progression';

// buildMathProgression
export const buildProgression = () => {
  let begin = getRandomNumber(0, 101);
  const step = Math.floor((Math.random() * 5) + 1);
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(begin);
    begin += step;
  }
  return result;
};

// game
export default () => {
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
  const userAnswer = Number(readlineSync.question(`Question: ${hideNumber}\nYour answer: `));
  result.push(userAnswer, correctAnswer);
  return result;
};
