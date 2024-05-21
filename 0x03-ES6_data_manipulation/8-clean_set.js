const cleanSet = (set, startString) => {
  // function that returns a string of all the set values that start with a specific string
  const arr = [...set];
  // filter array element
  return arr.filter((item) => item.startsWith(startString));
};
export default cleanSet;
