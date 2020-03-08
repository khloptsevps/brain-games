import readlineSync from 'readline-sync';
import gameEven from '../games/brain-even-game.js';
import gameCalc from '../games/brain-calc-game.js';
import gameGcd from '../games/brain-gcd-game.js';
import gameProgression from '../games/brain-progression-game.js';
import gameIsPrime from '../games/brain-prime-game.js';

// Welcome message
export const welcome = () => '\nWelcome to the Brain Games!';

// get user name
export const getName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  return name;
};

// if correctly answer
export const correct = () => 'Correct!';

// user win
export const win = (name) => `Congratulations, ${name}!`;

// user lose
export const lose = (userAnswer, correctAnswer, name) => `\n"${userAnswer}" is wrong asnwer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${name}!`;

// answers check
export const isRight = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    return true;
  }
  return false;
};

// game selection
export const getGame = (gameName) => {
  switch (gameName) {
    case 'even':
      return gameEven();
    case 'calc':
      return gameCalc();
    case 'gcd':
      return gameGcd();
    case 'progression':
      return gameProgression();
    case 'prime':
      return gameIsPrime();
    default:
      return 'game not found';
  }
};

// games rules
export const getRule = (gameName) => {
  switch (gameName) {
    case 'even':
      return '\nAnswer "yes" if the number is even, otherwise "no".\n';
    case 'calc':
      return '\nWhat is the result of the expression?\n';
    case 'gcd':
      return '\nFind the greatest common divisor of given numbers.\n';
    case 'progression':
      return '\nWhat number is missing in the progression?.\n';
    case 'prime':
      return '\nAnswer "yes" if given number is prime. Otherwise answer "no"..\n';
    default:
      return 'game not found';
  }
};

// GAME Utilities
// brain-games
export const hello = () => {
  const name = getName();
  return `Hello, ${name}!`;
};

// test
export const chooseGame = () => {
  console.log('\nChoose game:');
  const games = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression', 'prime'];
  const game = readlineSync.keyInSelect(games);
  return game;
};

// testing
export const testHello = (name) => `\nHello, ${name}!\n`;

// see you
export const bye = () => 'See you later';

// hello for games
export const helloForGames = (name) => `\nHello, ${name}!\n`;
