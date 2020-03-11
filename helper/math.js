// get random number from range
export default (min, max) => {
  const randomize = Math.floor(Math.random() * (max - min) + min);
  return randomize;
};
