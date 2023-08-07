const fs = require('fs');
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
              ${this.textElement}
              ${this.shapeElement}
            </svg>`;
  }

  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter the text for the logo:"
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color (color keyword or hexadecimal number):"
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape for the logo:",
    choices: ["Triangle", "Circle", "Square"]
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color (color keyword or hexadecimal number):"
  }
];

const svg = new Svg();

inquirer
  .prompt(questions)
  .then(answers => {
    const { text, textColor, shape, shapeColor } = answers;

    svg.setTextElement(text, textColor);

    switch (shape) {
        case 'Triangle':
          svg.setShapeElement(new Triangle());
          break;
        case 'Circle':
          svg.setShapeElement(new Circle());
          break;
        case 'Square':
          svg.setShapeElement(new Square());
          break;
        default:
          console.error('Invalid shape specified.');
          process.exit(1);
      }

   

    const logoSVG = svg.render();

    // Save the SVG to a file in the examples folder
    const fileName = `examples/logo-${Date.now()}.svg`;
    fs.writeFile(fileName, logoSVG, (err) => {
      if (err) {
        console.error('Error saving the SVG file:', err);
        process.exit(1);
      }

      console.log(`Logo saved as ${fileName}`);
    });
  })
  .catch(error => {
    console.error('Error inquiring user input:', error);
  });