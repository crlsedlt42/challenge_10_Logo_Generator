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
    constructor(text, textColor, shapeColor, shapeType, height, width, x, y) {
        super(text, textColor, shapeColor, shapeType)

        //Specific properties for a square
        this.height = height; //height of the square
        this.width = width; //width of the square
        this.x = x; //x coordinate
        this.y = y; //y coordinate
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="gray" /><${this.shapeType} fill="${this.shapeColor} x="${this.x} y="${this.y}" width="${this.width}" height="${this.height}" /></svg><text x="100%" y="100%" font-size="20px" font="Times New Roman" aligment-baseline="middle" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text></svg>`;
    }
}

//Creating a new CIRCLE class
class Circle extends SHAPES {
    constructor(text, textColor, shapeColor, shapeType, radius, x, y) {
        super(text, textColor, shapeColor, shapeType)

        //Specific properties for a circle
        this.radius = radius; //radius of the circle
        this.x = x; //x coordinate from the center of the circle
        this.y = y; //y coordinate from the center of the circle
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle width="100%" height="100%" fill="gray" /><${this.shapeType} fill="${this.shapeColor} cx="${this.x}" cy="${this.y}" r="${this.radius}"/></svg><text x="100%" y="100%" font-size="20px" font="Times New Roman" aligment-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

//Creating a new TRIANGLE class
class Triangle extends SHAPES {
    constructor(text, textColor, shapeColor, shapeType, vertices) {
        super(text, textColor, shapeColor, shapeType)

        //Specific properties for a triangle
        this.vertices = vertices; //endpoints of the triangle
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${this.shapeType} points="${this.vertices}" fill="${this.shapeColor}"/><text x="100%" y="100%" font-size="20px" font="Times New Roman" aligment-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}



//Exporting the classes
module.exports = {
    Square,
    Circle,
    Triangle
}