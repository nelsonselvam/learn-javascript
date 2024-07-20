/* STATIC KEYWORD

    - Keyword that defines properties or methods that belong to a class itself that the objects created from the class
    - Class owns anything that are static, not the objects

*/

// example 1 : class with only static properties and methods

class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(2));
console.log(MathUtil.getCircumference(7));
console.log(MathUtil.getArea(4));

// example 2 : mix of regular and static methods

class User {
  static userCount = 0;

  constructor(userName) {
    this.userName = userName;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} users online!`);
  }
}

const spongeBob = new User("SpongBob");
console.log(User.userCount);
const spongeBob1 = new User("SpongBob1");
console.log(User.userCount);
User.getUserCount();
