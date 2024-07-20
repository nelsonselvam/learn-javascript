- Keyword that defines properties or methods that belong to a class itself that the objects created from the class
- Class owns anything that are static, not the objects

``` javascript

class User {
  
  static userCount = 0;                 // a static variable belonging to this class User

  constructor(userName) {
    this.userName = userName;
    User.userCount++;
  }

  static getUserCount() {               // a static method belongin to this class User
    console.log(`There are ${User.userCount} users online!`);
  }
}

const spongeBob = new User("SpongBob");
console.log(User.userCount);        // accessing a static variable

const spongeBob1 = new User("SpongBob1");
console.log(User.userCount);
User.getUserCount();                // accessing a static method

```