//Creating a new SHAPES class 

class SHAPES {
    constructor(text, textColor, shapeColor, shapeType) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shapeType = shapeType;
    }
}

//Creating a new SQUARE class
class Square extends SHAPES {
    render() {
        return `<svg width="300" height="300"><rect width="100%" height="100%" fill="${this.shapeColor}" /><text x="150" y="180" font-size="100px" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text></svg>`;
    }
}

//Creating a new CIRCLE class
class Circle extends SHAPES {
    render() {
        return `<svg width="200" height="200"><circle cx="100" cy="100" r="90" fill="${this.shapeColor}" /><text x="100" y="115" font-size="50px" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

//Creating a new TRIANGLE class
class Triangle extends SHAPES {

    render() {
        return `<svg width="300" height="300"><polygon points="150 0, 300 300, 0 300" fill="${this.shapeColor}"/><text x="150" y="210" font-size="50px" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}



//Exporting the classes
module.exports = {
    Square,
    Circle,
    Triangle
}