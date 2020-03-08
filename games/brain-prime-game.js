import readlineSync from 'readline-sync';
import { getNumber, isPrime } from '../helper/math.js';

// game name
export const gameName = () => 'prime';

// game
export default () => {
  const result = [];
  const number = getNumber();
  let correctAnswer;
  if (isPrime(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
  result.push(userAnswer, correctAnswer);
  return result;
};
