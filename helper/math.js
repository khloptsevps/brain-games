// get random number from range
export const getRandomNumber = (min, max) => {
  const randomize = Math.floor(Math.random() * (max - min) + min);
  return randomize;
};

// even number check
export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
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
  let begin = getRandomNumber(0, 101);
  const step = Math.floor((Math.random() * 5) + 1);
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(begin);
    begin += step;
  }
  return result;
};
