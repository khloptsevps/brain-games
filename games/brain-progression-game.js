import readlineSync from 'readline-sync';
import { getSmallNumber, buildProgression } from '../helper/math.js';

// game name
export const gameName = () => 'progression';

// game
export default () => {
  const result = [];
  const progression = buildProgression();
  const index = getSmallNumber();
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
