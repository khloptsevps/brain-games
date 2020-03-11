// get random number from range
export const getRandomNumber = (min, max) => {
  const randomize = Math.floor(Math.random() * (max - min) + min);
  return randomize;
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
