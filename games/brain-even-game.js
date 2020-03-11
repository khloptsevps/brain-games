import readlineSync from 'readline-sync';
import getRandomNumber from '../helper/math.js';

// game name
export const gameName = () => 'even';

// even number check
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

// game
export default () => {
  const result = [];
  const number = getRandomNumber(1, 101);
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
