const updateStudentGradeByCity = (studentsList, city, newGrades) => {
  // Function that returns an array of students for a specific city with their new grade
  const cityStudents = studentsList.filter((student) => student.location === city);

  const newList = cityStudents.map((student) => {
    newGrades.forEach((grade) => {
      if (student.id === grade.studentId) {
        student.grade = grade.grade;
      }

      if (!student.hasOwnProperty('grade')) { student.grade = 'N/A'; }
    });
    return student;
  });

  return newList;
};

export default updateStudentGradeByCity;
