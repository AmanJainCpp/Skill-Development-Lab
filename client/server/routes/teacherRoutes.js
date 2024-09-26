const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/studentList', teacherController.studentList);
router.post('/markAttendance', teacherController.markAttendance);
router.get('/generatePDF', teacherController.generatePDF);

module.exports = router;
