// random number from 1 to 100;
export const getNumber = () => Math.floor((Math.random() * 100) + 1);

// random number from 0 to 9;
export const getSmallNumber = () => Math.floor((Math.random() * 10));

// even number check
export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

// sum two elements
export const sum = (a, b) => a + b;

// multiply two elemenst
export const multiply = (a, b) => a * b;

// subtract two elements
export const subtract = (a, b) => a - b;

// get random operator
export const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomize = Math.floor(Math.random() * 3);
  return operators[randomize];
};

// greatest common devider two numbers
export const gcd = (num1, num2) => {
  let result = 0;
  for (let i = 1; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

// prime check
export const isPrime = (num) => {
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

// buildMathProgression
export const buildProgression = () => {
  let begin = getNumber();
  const step = Math.floor((Math.random() * 5) + 1);
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(begin);
    begin += step;
  }
  return result;
};
