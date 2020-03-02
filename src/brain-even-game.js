import readlineSync from 'readline-sync';
import { getName, isEven } from './index.js';

export default () => {
  const name = getName();
  // rule of game
  console.log('Answer "yes" if the number is even, otherwise "no".');
  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor((Math.random() * 100) + 1);
    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const correctAnswer = isEven(number);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong asnwer ;(. Correct answer was "${correctAnswer}"`);
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
