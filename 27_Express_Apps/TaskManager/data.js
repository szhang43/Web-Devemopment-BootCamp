const { v4: uuid } = require('uuid');

let tasks = [
    {
        id: uuid(),
        date: "10.20.2023",
        description: "Buy groceries for the week.",
        task: "Personal"
    },
    {
        id: uuid(),
        date: "10.26.2023",
        description: "Go for a 30-minute walk.",
        task: "Health & Fitness"
    },
    {
        id: uuid(),
        date: "10.24.2023",
        status: "not started",
        description: "Read a chapter of a book you've been meaning to finish.",
        task: "Leisure"
    },
    {
        id: uuid(),
        date: "10.22.2023",
        description: "Set up a budget for the month",
        task: "Finance"
    },
    {
        id: uuid(),
        date: "10.24.2023",
        description: "Schedule a dentist appointment.",
        task: "Health"
    }
];


module.exports = tasks;