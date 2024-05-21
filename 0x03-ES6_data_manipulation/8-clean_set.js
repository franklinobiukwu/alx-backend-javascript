const cleanSet = (set, startString) => {
  // function that returns a string of all the set values that start with a specific string
  const arr = [...set];
  // filter array element
  const filteredString =  arr.filter((item) => item.startsWith(startString));
    filteredString.forEach((item) => item.split())
};
export default cleanSet;
