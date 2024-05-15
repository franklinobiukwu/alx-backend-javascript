const updateStudentGradeByCity = (studentsList, city, newGrades) => {
  // Function that returns an array of students for a specific city with their new grade
  const cityStudents = studentsList.filter((student) => student.location === city);

  const newList = cityStudents.map((student) => {
    const studentCopy = { ...student };
    const matchedStudent = newGrades.find((grade) => student.id === grade.studentId);

    studentCopy.grade = matchedStudent ? matchedStudent.grade : 'N/A';

    return studentCopy;
  });

  return newList;
};

export default updateStudentGradeByCity;
