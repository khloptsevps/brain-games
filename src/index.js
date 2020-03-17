import readlineSync from 'readline-sync';

// game engine
export default (gameRule, getQuestion) => {
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(gameRule);
  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion();
    const [expression, correctAnswer] = question;
    const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      return console.log(`\n"${userAnswer}" is wrong asnwer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
