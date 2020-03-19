import readlineSync from 'readline-sync';

// game engine
export default (task, generateQuestionAndAnswer) => {
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(task);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, answer] = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== answer) {
      return `\n"${userAnswer}" is wrong asnwer ;(. Correct answer was "${answer}"\nLet's try again, ${name}!`;
    }
    console.log('Correct!\n');
  }
  return `Congratulations, ${name}!`;
};
