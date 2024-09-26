// Handle Admin: Add Student
document.getElementById('addStudentForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;

    const response = await fetch('/api/admin/addStudent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, grade }),
    });

    const data = await response.json();
    if (data.success) {
        alert('Student added successfully');
    } else {
        alert('Error: ' + data.message);
    }
});

// Handle Teacher: Mark Attendance
document.getElementById('markAttendanceForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const studentId = document.getElementById('studentId').value;
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;

    const response = await fetch('/api/teacher/markAttendance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId, date, status }),
    });

    const data = await response.json();
    if (data.success) {
        alert('Attendance marked successfully');
    } else {
        alert('Error: ' + data.message);
    }
});
