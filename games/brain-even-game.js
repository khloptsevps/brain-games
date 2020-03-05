import readlineSync from 'readline-sync';

// secondary functions
const getNumber = () => {
  const randomNumber = Math.floor((Math.random() * 99) + 1);
  return randomNumber;
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const ruleBrainEvenGame = () => 'Answer "yes" if the number is even, otherwise "no".';

export const getAnswer = (number) => readlineSync.question(`Question: ${number}\nYour answer: `);

export const getCorrectAnswer = (number) => isEven(number);

// game
export default () => {
  const result = [];
  const number = getNumber();
  const userAnswer = getAnswer(number);
  const correctAnswer = isEven(number);
  result.push(userAnswer, correctAnswer);
  return result;
};
