// get random number from range
export const getRandomNumber = (min, max) => {
  const randomize = Math.floor(Math.random() * (max - min) + min);
  return randomize;
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
