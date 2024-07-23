## ES6 MODULES

    - An external file that contains reusable code that can be imported into other Javascript files.
    - Write reusable code for many different apps.
    - Can contain variables, classes, functions etc. and more.
    - Introduced as a part of ECMAScript 2015 update.
    - use the `export` keyword to export modules

1. Create a javascript file having the code that can be re-used. Use `export` keyword to export the modules.

``` javascript
// filename: mathUtils.js
export const PI = 3.14159;

export function getArea(radius) {
  return PI * radius * radius;
}

export function getCircumference(radius) {
  return 2 * PI * radius;
}

```

2. Update the type as module in the HTML file that sources the Javascript that needs to import the above module.

``` html
<script type="module" src="mathUtils.js"></script>	
```

3. import the module with the required objects using object destructuring pointing to the source javascript file.

```javascript
// object destructuring to specify objects
// import the objects pointing to the location of the file
import { PI, getArea, getCircumference } from './mathUtils.js';

console.log(PI);
console.log(`circumference: ${getCircumference(5).toFixed(2)} cm`);
console.log(`area: ${getArea(5).toFixed(2)} cm^2`);

```