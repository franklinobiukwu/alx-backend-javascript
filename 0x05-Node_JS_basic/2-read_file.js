const fs = require('fs');
/*
    * Create a function named countStudents. It should accept a path in argument
    * The script should attempt to read the database file synchronously
    * If the database is not available, it should throw an
      error with the text Cannot load the database
    * If the database is available, it should log the following
      message to the console Number of students: NUMBER_OF_STUDENTS
    * It should log the number of students in each field,
      and the list with the following format:
      Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
    * CSV file can contain empty lines (at the end) - and they are not a valid student! */

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const dataInArray = data.split('\n').filter((line) => line); // Filter out empty lines
    const listOfStudents = dataInArray.slice(1); // skip header line

    console.log(`Number of students: ${listOfStudents.length}`);

    const courseData = {};

    // Process each student entry
    listOfStudents.forEach((student) => {
      const studentData = student.split(',').map((field) => field.trim());
      const studentName = studentData[0];
      const studentCourse = studentData[studentData.length - 1];

      if (!courseData[studentCourse]) {
        courseData[studentCourse] = { count: 0, students: [] };
      }
      courseData[studentCourse].count += 1;
      courseData[studentCourse].students.push(studentName);
    });

    // Output results for each course
    Object.keys(courseData).forEach((course) => {
      const { count, students } = courseData[course];
      console.log(`Number of students in ${course}: ${count}. List: ${students.join(', ')}`);
    });
  } catch (err) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
