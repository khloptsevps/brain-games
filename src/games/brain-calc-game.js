import getRandomNumber from '../utils/math.js';
import runGameEngine from '../index.js';

const operatorsArray = ['+', '-', '*'];

// get random operator
const getOperator = (arr) => {
  const randomize = getRandomNumber(0, 2);
  return arr[randomize];
};
// game task
const task = 'What is the result of the expression?';

// game logic
const generateQuestionAndAnswer = () => {
  let answer = 0;
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const operator = getOperator(operatorsArray);
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    default:
      answer = num1 * num2;
  }
  const question = `${num1} ${operator} ${num2}`;
  return [question, String(answer)];
};

export default () => runGameEngine(task, generateQuestionAndAnswer);
