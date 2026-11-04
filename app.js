
const express = require('express');
const app = express();

// חיבור הנתיבים של המשימות והקורסים
const tasksRoutes = require('./routes/tasks');
const coursesRoutes = require('./routes/courses');

app.use('/api/tasks', tasksRoutes);
app.use('/api/courses', coursesRoutes);

// דף הבית
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to StudyFlow API' });
});

// טיפול בכתובות שאינן קיימות
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// הפעלת השרת
app.listen(3000, () => {
    console.log('StudyFlow server is running');
});
