import {
  correct, getName, isRight, lose, win, getGame, getRule, welcome,
} from '../helper/utility.js';

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
