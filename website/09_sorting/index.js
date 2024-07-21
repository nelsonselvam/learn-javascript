/* SORTING 

    - sorts elements using the `sort()` method
    - sort elements in lexicographic (strings + members + symbols) & not alphabetical order

*/

let numbers = [0, 8, 1, 4, 3, 10, 7, 9, 6, 2];

numbers.sort();

console.log(numbers); // lexicographical sort gives [ 0, 1, 10, 2, 3, 4, 6, 7, 8, 9 ]

numbers.sort((a, b) => a - b);

console.log(numbers); // gives [ 0, 1, 2, 3, 4, 6, 7, 8, 9, 10 ]

numbers.sort((a, b) => b - a);

// sorting objects

const people = [
  { name: "SpongBob", age: 30, GPA: 3.2 },
  { name: "Matrick", age: 37, GPA: 1.9 },
  { name: "Verkle", age: 51, GPA: 2.5 },
  { name: "Andy", age: 27, GPA: 4.05 },
];

people.sort((a, b) => a.age - b.age);

console.log(people);

people.sort((a, b) => b.age - a.age);

people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);

