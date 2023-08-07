const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('should render a triangle SVG with the given shape color', () => {
    const shapeColor = 'red';
    const triangle = new Triangle(shapeColor); // Pass the shapeColor as an argument
    const expectedSVG = `<svg width="300" height="200">
                          <polygon points="150,0 300,200 0,200" fill="${shapeColor}" />
                        </svg>`;
    expect(triangle.render()).toEqual(expectedSVG);
  });
});

describe('Circle', () => {
  test('should render a circle SVG with the given shape color', () => {
    const shapeColor = 'blue';
    const circle = new Circle(shapeColor); // Pass the shapeColor as an argument
    const expectedSVG = `<svg width="300" height="200">
                          <circle cx="150" cy="100" r="100" fill="${shapeColor}" />
                        </svg>`;
    expect(circle.render()).toEqual(expectedSVG);
  });
});

describe('Square', () => {
  test('should render a square SVG with the given shape color', () => {
    const shapeColor = 'green';
    const square = new Square(shapeColor); // Pass the shapeColor as an argument
    const expectedSVG = `<svg width="300" height="200">
                          <rect width="300" height="200" fill="${shapeColor}" />
                        </svg>`;
    expect(square.render()).toEqual(expectedSVG);
  });
});