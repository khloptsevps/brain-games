import readlineSync from 'readline-sync';

// general logic

export default () => 'Welcome to the Brain Games!';

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const getNumber = () => {
  const randomNumber = Math.floor((Math.random() * 100) + 1);
  return randomNumber;
};

export const isRight = (userAnswer, correctAnswer) => {
  if (userAnswer !== correctAnswer) {
    return false;
  }
  return true;
};

export const correct = () => 'Correct!';

export const win = (name) => `Congratulations, ${name}!`;

export const lose = (userAnswer, correctAnswer, name) => `"${userAnswer}" is wrong asnwer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${name}!`;

// brain-games
export const hello = () => {
  const name = getName();
  return `Hello, ${name}!`;
};

// brain-even
export const ruleBrainEvenGame = () => 'Answer "yes" if the number is even, otherwise "no".';

export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

// brain-calc
export const ruleBrainCalcGame = () => 'What is the result of the expression?';

export const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomize = Math.floor(Math.random() * 3);
  return operators[randomize];
};

export const sum = (a, b) => a + b;

export const multiply = (a, b) => a * b;

export const subtract = (a, b) => a - b;
