import readlineSync from 'readline-sync';
import { isEven, getNumber } from '../helper/math.js';

// game name
export const gameName = () => 'even';

// game
export default () => {
  const result = [];
  const number = getNumber();
  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
  let correctAnswer;
  if (isEven(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  result.push(userAnswer, correctAnswer);
  return result;
};
