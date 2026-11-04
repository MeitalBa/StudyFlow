
const tasks = [
    {
        id: 1,
        title: "מטלה 2",
        courseId: 1,
        dueDate: "2026-11-18",
        priority: "high",
        status: "in progress"
    },
    {
        id: 2,
        title: "תרגיל 3",
        courseId: 2,
        dueDate: "2026-11-20",
        priority: "medium",
        status: "not started"
    },
    {
        id: 3,
        title: "דוח קבוצתי",
        courseId: 3,
        dueDate: "2026-11-22",
        priority: "high",
        status: "not started"
    }
];

const courses = [
    { id: 1, name: "תכנות WEB" },
    { id: 2, name: "מסדי נתונים" },
    { id: 3, name: "ניהול פרויקטים" }
];

module.exports = { tasks, courses };
