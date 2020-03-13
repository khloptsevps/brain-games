import readlineSync from 'readline-sync';
import { getGame, getRule } from '../helper/utility.js';

// Welcome message
const welcome = () => '\nWelcome to the Brain Games!';

// get user name
const getName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  return name;
};

// if correctly answer
const correct = () => 'Correct!';

// user win
const win = (name) => `Congratulations, ${name}!`;

// user lose
const lose = (userAnswer, correctAnswer, name) => `\n"${userAnswer}" is wrong asnwer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${name}!`;

// answers check
const isRight = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    return true;
  }
  return false;
};

// game engine
export default (game) => {
  console.log(welcome());
  const name = getName();
  console.log(getRule(game));
  for (let i = 0; i < 3; i += 1) {
    const question = getGame(game);
    const [userAnswer, correctAnswer] = question;
    if (isRight(userAnswer, correctAnswer)) {
      console.log(correct());
    } else {
      return console.log(lose(userAnswer, correctAnswer, name));
    }
  }
  return console.log(win(name));
};
