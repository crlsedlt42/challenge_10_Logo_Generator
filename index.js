const fs = require('fs');
const inquirer = require('inquirer');
const shapeType = require('./lib/shapes.js');
const logoPrompt = require('./lib/questions.js');

const generateLogo = (logoFile) => {
    fs.writeFile('logo.svg', logoFile, (err) =>
        err ? console.error(err) : console.log("Success! Your logo has been created!"),
        console.log(`Logo was saved to ${logoFile}`)
    )
}

const startInquirer = () => {
    inquirer
        .prompt(logoPrompt)
        .then((answers) => {
            generateLogo(shapeType(answers));
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