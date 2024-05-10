const getStudentIdsSum = (studentsList) => {
  // Function that returns the sum of all the student isd
  const idSum = studentsList.reduce((sum, student) => sum + student.id, 0);
  return idSum;
};

export default getStudentIdsSum;
