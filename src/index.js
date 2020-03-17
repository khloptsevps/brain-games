import readlineSync from 'readline-sync';

// Welcome message
const welcome = () => '\nWelcome to the Brain Games!';

// get user name
const getName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  return name;
};

// answers check
const isRight = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    return true;
  }
  return false;
};

// game engine
export default (gameRule, getQuestion) => {
  console.log(welcome());
  const name = getName();
  console.log(gameRule);
  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion();
    const [expression, correctAnswer] = question;
    const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);
    if (isRight(userAnswer, correctAnswer)) {
      console.log('Correct!\n');
    } else {
      return console.log(`\n"${userAnswer}" is wrong asnwer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
