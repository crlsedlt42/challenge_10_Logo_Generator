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
        return ``;
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
        return ``;
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
        return ``;
    }
}