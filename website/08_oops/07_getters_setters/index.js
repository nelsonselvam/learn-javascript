/* GETTERS AND SETTERS

    - used in classes that is used to call the constructor or access the properties/methods of a parent(superclass)
    - helps in code reusability, any properties/methods that are common can be placed here.

*/

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth; // _ denotes that this a private property, must be used within the setter method
    } else {
      console.error("Width must be a positive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be a positive number");
    }
  }

  get width() {
    return `${this._width.toFixed(1)} cm`;
  }

  get height() {
    return `${this._height.toFixed(1)} cm`;
  }

  get area() {
    return `${(this._height * this._width).toFixed(1)} cm2`;
  }
}

const invalidRectangle = new Rectangle(-90900, "Invalid Height"); // this will not work
const rectangle = new Rectangle(30, 40); // this will work

console.log(rectangle._height);
console.log(rectangle._width);

console.log(rectangle.width);

console.log(rectangle.area);
