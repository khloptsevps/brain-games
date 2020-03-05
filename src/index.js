import readlineSync from 'readline-sync';
import gameEven from '../games/brain-even-game.js';
import gameCalc from '../games/brain-calc-game.js';
import gameGcd from '../games/brain-gcd-game.js';

// general
const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const isRight = (userAnswer, correctAnswer) => {
  if (userAnswer !== correctAnswer) {
    return false;
  }
  return true;
};

const correct = () => 'Correct!';

const win = (name) => `Congratulations, ${name}!`;

const lose = (userAnswer, correctAnswer, name) => `"${userAnswer}" is wrong asnwer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${name}!`;

// game selection
const getGame = (rule) => {
  if (rule === 'Answer "yes" if the number is even, otherwise "no".') {
    return gameEven();
  }
  if (rule === 'What is the result of the expression?') {
    return gameCalc();
  }
  if (rule === 'Find the greatest common divisor of given numbers.') {
    return gameGcd();
  }
  return 'not a game';
};

export const welcome = () => 'Welcome to the Brain Games!';

// brain-games
export const hello = () => {
  const name = getName();
  return `Hello, ${name}!`;
};

// game engine
export default (ruleOfGame) => {
  const name = getName();
  console.log(ruleOfGame);
  for (let i = 0; i < 3; i += 1) {
    const question = getGame(ruleOfGame);
    const [userAnswer, correctAnswer] = question;
    if (isRight(userAnswer, correctAnswer)) {
      console.log(correct());
    } else {
      return lose(userAnswer, correctAnswer, name);
    }
  }
  return win(name);
};
