import gameEven from '../games/brain-even-game.js';
import gameCalc from '../games/brain-calc-game.js';
import gameGcd from '../games/brain-gcd-game.js';
import gameProgression from '../games/brain-progression-game.js';
import gameIsPrime from '../games/brain-prime-game.js';

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
