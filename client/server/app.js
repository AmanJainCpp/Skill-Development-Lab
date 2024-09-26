const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/db');

// Middleware
app.use(bodyParser.json());

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));

// Import Routes
const adminRoutes = require('./routes/adminRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

// Use Routes
app.use('/admin', adminRoutes);
app.use('/teacher', teacherRoutes);

// Authentication Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

        if (rows.length > 0) {
            const user = rows[0];
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                return res.json({ success: true, role: user.role });
            }
        }

        res.status(401).json({ success: false, message: 'Invalid credentials' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
