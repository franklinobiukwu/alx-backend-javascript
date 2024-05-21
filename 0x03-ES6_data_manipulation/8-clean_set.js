const cleanSet = (set, startString) => {
  if (!startString || !startString.length || typeof startString !== 'string') return '';
  // function that returns a string of all the set values that start with a specific string
  const arr = [...set];
  // filter array element
  const filteredString = arr.filter((item) => item.startsWith(startString));
  const trimmedString = filteredString.map((item) => item.slice(startString.length));
  return trimmedString.join('-');
};
export default cleanSet;
