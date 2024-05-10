const getStudentsByLocation = (studentList, city) => {
  const arrOfObj = studentList.filter((student) => student.location === city);
  return arrOfObj;
};

export default getStudentsByLocation;
