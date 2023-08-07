// Parent Shape class
class Shape {

    constructor() {
      this.color = color || '';
    }


}
  
  // Child Triangle class
  class Triangle extends Shape {
    

    render() {
      // Implement the rendering logic for Triangle SVG
      return `<svg width="300" height="200">
                <polygon points="150,0 300,200 0,200" fill="${this.shapeColor}" />
              </svg>`;
    }
  }
  
  // Child Circle class
  class Circle extends Shape {
  
    render() {
      // Implement the rendering logic for Circle SVG
      return `<svg width="300" height="200">
                <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
              </svg>`;
    }
  }
  
  // Child Square class
  class Square extends Shape {

    render() {
      // Implement the rendering logic for Square SVG
      return `<svg width="300" height="200">
                <rect width="300" height="200" fill="${this.shapeColor}" />
              </svg>`;
    }
  };
  
  module.exports = {Triangle, Circle, Square,}