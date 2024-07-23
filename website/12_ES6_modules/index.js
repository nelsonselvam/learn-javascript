/* ES6 MODULES

    - An external file that contains reusable code that can be imported into other Javascript files.
    - Write reusable code for many different apps.
    - Can contain variables, classes, functions etc. and more.
    - Introduced as a part of ECMAScript 2015 update.

*/

// object destructuring to specify objects
// import the objects pointing to the location of the file
import { PI, getArea, getCircumference } from './mathUtils.js';

console.log(PI);
console.log(`circumference: ${getCircumference(5).toFixed(2)} cm`);
console.log(`area: ${getArea(5).toFixed(2)} cm^2`);
