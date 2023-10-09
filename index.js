const inquirer = require('inquirer');
const shapeType = require('./lib/shapes.js');

inquirer
.prompt([
    {
        type: "input",
        name: "question",
        message: "What text would you like to display?"
    },

    {
        type: "input",
        name: "textColor",
        message: "What color would you like your text to be?"
    },

    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your shape to be?"
    },

    {
        type: "list",
        name: "shapeType",
        message: "What shape would you like to display?",
        choices: ["Square", "Circle", "Triangle"]
    }
])
.then(answers => {
console.log(answers.question);
});

