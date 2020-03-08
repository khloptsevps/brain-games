import {
  correct, getName, isRight, lose, win, getGame, getRule,
} from '../helper/utility.js';

// game engine
export default (game) => {
  const name = getName();
  console.log(getRule(game));
  for (let i = 0; i < 3; i += 1) {
    const question = getGame(game);
    const [userAnswer, correctAnswer] = question;
    if (isRight(userAnswer, correctAnswer)) {
      console.log(correct());
    } else {
      return lose(userAnswer, correctAnswer, name);
    }
  }
  return win(name);
};
