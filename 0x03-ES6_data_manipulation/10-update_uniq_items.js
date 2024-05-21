// eslint-disable-next-line consistent-return
const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) {
    return;
  }
  const array = Array.from(map);
  const newArray = array.map((item) => {
    const itemCopy = [...item];
    if (item[1] === 1) itemCopy[1] = 100;
    return itemCopy;
  });

  return new Map(newArray);
};
export default updateUniqueItems;
