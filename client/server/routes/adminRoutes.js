const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/addStudent', adminController.addStudent);
router.post('/addTeacher', adminController.addTeacher);
router.get('/viewAttendance', adminController.viewAttendance);

module.exports = router;
