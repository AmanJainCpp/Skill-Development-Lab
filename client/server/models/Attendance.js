const db = require('../config/db');

// Mark attendance for a student
exports.markAttendance = async (studentId, date, status) => {
  return await db.query("INSERT INTO attendance (studentId, date, status) VALUES (?, ?, ?)", [studentId, date, status]);
};

// Get attendance for a specific student
exports.getAttendanceByStudent = async (studentId) => {
  return await db.query("SELECT * FROM attendance WHERE studentId = ?", [studentId]);
};

// Get overall attendance by grade
exports.getAttendanceByGrade = async (grade) => {
  return await db.query(`
    SELECT students.id, students.name, attendance.date, attendance.status 
    FROM students 
    JOIN attendance ON students.id = attendance.studentId 
    WHERE students.grade = ?
  `, [grade]);
};

// Get attendance percentage of a student
exports.getAttendancePercentage = async (studentId) => {
  const totalDays = await db.query("SELECT COUNT(*) AS total FROM attendance WHERE studentId = ?", [studentId]);
  const presentDays = await db.query("SELECT COUNT(*) AS present FROM attendance WHERE studentId = ? AND status = 'present'", [studentId]);

  if (totalDays[0].total === 0) return 0;
  return (presentDays[0].present / totalDays[0].total) * 100;
};
