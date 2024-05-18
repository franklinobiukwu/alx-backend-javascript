const createInt8TypedArray = (length, position, value) => {
  if (position > length - 1 || position < 0) {
    throw new Error('Position outside range');
  }
  const arrBuff = new ArrayBuffer(length);
  const dataView = new DataView(arrBuff);
  dataView.setInt8(position, value);

  return dataView;
};

export default createInt8TypedArray;
