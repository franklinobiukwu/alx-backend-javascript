const getListStudentIds = (arrOfObj) => {
  if (!Array.isArray(arrOfObj)) {
    return [];
  }

  const arrOfIDs = arrOfObj.map((obj) => obj.id);

  return arrOfIDs;
};

export default getListStudentIds;
