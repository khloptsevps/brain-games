import getRandomNumber from '../utils/math.js';
import runGameEngine from '../index.js';

const operators = ['+', '-', '*'];

// get random operator
const getOperator = (arr) => {
  const randomize = getRandomNumber(0, arr.length - 1);
  return arr[randomize];
};

// calculating
const makeCalc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

// game task
const task = 'What is the result of the expression?';

// game logic
const genGameData = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const operator = getOperator(operators);
  const question = `${num1} ${operator} ${num2}`;
  const answer = makeCalc(num1, num2, operator);
  return [question, String(answer)];
};

export default () => runGameEngine(task, genGameData);
