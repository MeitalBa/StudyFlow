
const express = require('express');
const router = express.Router();

const { tasks } = require('../data');

// החזרת כל המשימות
router.get('/', (req, res) => {
    res.json(tasks);
});

// החזרת משימות שמועד הגשתן ב-14 הימים הקרובים
router.get('/upcoming', (req, res) => {
    const upcomingTasks = [...tasks]
        .filter(task => task.status !== 'completed')
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
        .slice(0, 2);

    res.json(upcomingTasks);
});

module.exports = router;
