import readlineSync from 'readline-sync';

// secondary functions
const getNumber = () => {
  const randomNumber = Math.floor((Math.random() * 99) + 1);
  return randomNumber;
};

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const ruleBrainPrimeGame = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

// game
export default () => {
  const result = [];
  const number = getNumber();
  let correctAnswer;
  if (isPrime(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
  result.push(userAnswer, correctAnswer);
  return result;
};
