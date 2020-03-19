// get random number from range
export default (min, max) => {
  const randomize = Math.floor(Math.random() * (max - min + 1) + min);
  return randomize;
};
