const bcrypt = require('bcrypt');

const db = require('../config/db');

exports.addStudent = async (req, res) => {
  const { name, grade } = req.body;
  await db.query("INSERT INTO students (name, grade) VALUES (?, ?)", [name, grade]);
  res.json({ success: true, message: 'Student added successfully' });
};

exports.addTeacher = async (req, res) => {
  const { name, email, password, grade } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.query("INSERT INTO teachers (name, email, password, grade) VALUES (?, ?, ?, ?)", [name, email, hashedPassword, grade]);
  res.json({ success: true, message: 'Teacher added successfully' });
};

exports.viewAttendance = async (req, res) => {
  const { grade } = req.query;
  const attendance = await db.query("SELECT * FROM attendance WHERE grade = ?", [grade]);
  res.json({ success: true, data: attendance });
};
