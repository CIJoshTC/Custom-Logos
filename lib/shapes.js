class Shape {
  constructor(shapeColor) {
    this.color = shapeColor || '';
  }
}

// Child Triangle class
class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200">
              <polygon points="150,0 300,200 0,200" fill="${this.color}" />
            </svg>`;
  }
}

// Child Circle class
class Circle extends Shape {
  render() {
    return `<svg width="300" height="200">
              <circle cx="150" cy="100" r="100" fill="${this.color}" />
            </svg>`;
  }
}

// Child Square class
class Square extends Shape {
  render() {
    return `<svg width="300" height="200">
              <rect width="300" height="200" fill="${this.color}" />
            </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };