import readlineSync from 'readline-sync';
import {
  getName, isEven, getNumber, win, isRight, lose, correct, ruleBrainEvenGame,
} from './index.js';

export default () => {
  const name = getName();
  // game logic
  console.log(ruleBrainEvenGame());
  for (let i = 1; i <= 3; i += 1) {
    const number = getNumber();
    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const correctAnswer = isEven(number);
    if (isRight(userAnswer, correctAnswer)) {
      console.log(correct());
    } else {
      return lose(userAnswer, correctAnswer, name);
    }
  }
  return win(name);
};
