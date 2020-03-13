import readlineSync from 'readline-sync';

// Welcome message
const welcome = () => '\nWelcome to the Brain Games!';

// get user name
const getName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  return name;
};

// if correctly answer
const correct = () => 'Correct!\n';

// user win
const win = (name) => `\nCongratulations, ${name}!`;

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
export default (game, getQuestion) => {
  console.log(welcome());
  const name = getName();
  console.log(game);
  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion();
    const [expression, correctAnswer] = question;
    const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);
    if (isRight(userAnswer, correctAnswer)) {
      console.log(correct());
    } else {
      return console.log(lose(userAnswer, correctAnswer, name));
    }
  }
  return console.log(win(name));
};
