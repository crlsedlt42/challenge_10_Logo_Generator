const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes.js');
const logoPrompt = require('./lib/questions.js');

function generateLogo (logoFile, content) {
    console.log("Generating your logo...");
    fs.writeFile(logoFile, content, (err) => {
        err ? console.error(err) : console.log("Success! Your logo has been created!"),
        console.log(`Logo was saved to ${logoFile}`)
    }
    )
}

const startInquirer = () => {
    inquirer
        .prompt(logoPrompt)
        .then((answers) => {
            let choice;
            switch (answers.shapeType) {
                case "Square":
                    choice = new Square(answers.question, answers.textColor, answers.shapeColor, answers.shapeType).render();
                    break; 
                case "Circle":
                    choice =  new Circle(answers.question, answers.textColor, answers.shapeColor, answers.shapeType).render();
                    break;
                case "Triangle":
                    choice = new Triangle(answers.question, answers.textColor, answers.shapeColor, answers.shapeType).render();
                    break;
            }

            generateLogo("Logo.svg", choice);
        })
        .catch(err => {
            console.log(err);
        });
}

let init = () => {
    startInquirer();
}

init();




//////OLD CODE//////

/// Tried a few methods by myself and with tutors, but none of them worked. I'm leaving them here for reference.

// function fileInfo(file, data) {
//     fs.fileInfo(file, data, (err) =>
//         err ? console.error(err) : console.log("Success! Your logo has been created!"),
//         console.log(`Logo was saved to ${file}`)
//     )
// }



// function init() {
//     inquirer
//     .prompt(logoPrompt)
//         .then((answers) => {
//             const svgInput = shapeType(answers);
//             fileInfo("logo.svg", svgInput);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }

// init();

// let shapeInfo = shapeType(answers);

// fs.writeFile("Logo.svg", shapeInfo, err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("Congratulations, Successfully created your shape!")
// })

// // function init() {
// //     // console.log("Welcome, please answer the following questions to create your shape!");

// //     inquirer.prompt();
// // }

// // init();