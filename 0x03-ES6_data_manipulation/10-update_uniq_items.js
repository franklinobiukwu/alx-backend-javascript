const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) {
    return;
  }
  const array = Array.from(map);
  const newArray = array.map((item) => {
    if (item[1] === 1) item[1] = 100;
    return item;
  });

  return new Map(newArray);
};
export default updateUniqueItems;
