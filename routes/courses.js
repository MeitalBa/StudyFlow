
const express = require('express');
const router = express.Router();

const { tasks, courses } = require('../data');

// החזרת כל הקורסים
router.get('/', (req, res) => {
    res.json(courses);
});

// החזרת סיכום המשימות בכל קורס
router.get('/summary', (req, res) => {
    const summary = courses.map(course => {
        return {
            courseId: course.id,
            courseName: course.name,
            tasksCount: tasks.filter(task =>
                task.courseId === course.id
            ).length
        };
    });

    res.json(summary);
});

module.exports = router;
