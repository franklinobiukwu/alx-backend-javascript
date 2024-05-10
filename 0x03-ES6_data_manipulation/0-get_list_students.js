const getListStudents = () => {
  const arrOfObj = [];
  arrOfObj.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  arrOfObj.push({ id: 2, firstName: 'James', location: 'Columbia' });
  arrOfObj.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });

  return arrOfObj;
};

export default getListStudents;
