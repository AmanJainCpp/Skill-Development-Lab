const db = require('../config/db');

// Add new student
exports.addStudent = async (name, grade) => {
  return await db.query("INSERT INTO students (name, grade) VALUES (?, ?)", [name, grade]);
};

// Get list of students by grade
exports.getStudentsByGrade = async (grade) => {
  return await db.query("SELECT * FROM students WHERE grade = ?", [grade]);
};

// Update student details
exports.updateStudent = async (studentId, name, grade) => {
  return await db.query("UPDATE students SET name = ?, grade = ? WHERE id = ?", [name, grade, studentId]);
};

// Delete a student
exports.deleteStudent = async (studentId) => {
  return await db.query("DELETE FROM students WHERE id = ?", [studentId]);
};

// Get a student by ID
exports.getStudentById = async (studentId) => {
  return await db.query("SELECT * FROM students WHERE id = ?", [studentId]);
};
