import readlineSync from 'readline-sync';

// secondary functions
const getIndex = () => Math.floor((Math.random() * 10));

const buildProgression = () => {
  let begin = Math.floor(Math.random() * 100);
  const step = Math.floor((Math.random() * 5) + 1);
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(begin);
    begin += step;
  }
  return result;
};
export const ruleBrainProgressionGame = () => 'What number is missing in the progression?';

// game logic
export default () => {
  const result = [];
  const progression = buildProgression();
  const index = getIndex();
  const correctAnswer = progression[index];
  const hideNumber = progression.map((item) => {
    let hidedItem = item;
    if (hidedItem === correctAnswer) {
      hidedItem = '..';
    }
    return hidedItem;
  }).join(' ');
  const userAnswer = Number(readlineSync.question(`Question: ${hideNumber}\nYour answer: `));
  result.push(userAnswer, correctAnswer);
  return result;
};
