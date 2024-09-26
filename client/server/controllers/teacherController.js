const db = require('../config/db');

exports.studentList = async (req, res) => {
  const { grade } = req.query;
  const students = await db.query("SELECT * FROM students WHERE grade = ?", [grade]);
  res.json({ success: true, data: students });
};

exports.markAttendance = async (req, res) => {
  const { studentId, date, status } = req.body;
  await db.query("INSERT INTO attendance (studentId, date, status) VALUES (?, ?, ?)", [studentId, date, status]);
  res.json({ success: true, message: 'Attendance marked successfully' });
};

exports.generatePDF = (req, res) => {
  // Code to generate PDF report (use pdfkit or puppeteer)
};
