import readlineSync from 'readline-sync';

const roundsCount = 3;

// game engine
export default (task, genGameData) => {
  console.log('\nWelcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log(`${task}\n`);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, answer] = genGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`\n"${userAnswer}" is wrong asnwer ;(. Correct answer was "${answer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${name}!`);
};
