logoPrompt = [
    {
        type: "input",
        name: "question",
        message: "What text would you like to display?",
        validate: (logoText) => {
            if (logoText.length > 3) {
                return "Only 3 characters are allowed in your new logo. Please try again.";
            } else {
                return true;
            }
        }
    },

    {
        type: "list",
        name: "textColor",
        message: "What color would you like your text to be?",
        choices: ["White", "Yellow", "Cyan", "Magenta", "Blue", "Red", "Green", "Black",]
    },

    {
        type: "list",
        name: "shapeColor",
        message: "What color would you like your shape to be?",
        choices: ["White", "Yellow", "Cyan", "Magenta", "Blue", "Red", "Green", "Black"]
    },

    {
        type: "list",
        name: "shapeType",
        message: "What shape would you like to display?",
        choices: ["Square", "Circle", "Triangle"]
    }
];

module.exports = logoPrompt;