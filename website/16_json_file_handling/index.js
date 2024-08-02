/* JSON HANDLING

    JavaScript Onject Notation - Data Interchange format used in data exchange between server 
    and a web app.

    Available methods:
        - JSON.stringify()  - converts a JS object to a JSON string
        - JSON.parse()      - converts a JSON string to a JS object

*/

// use of stringify()

const names = ["Nelson", "John", "Mary", "Peter", "Susan"];

const jsonString = JSON.stringify(names);

console.log(jsonString);

const person = {
  name: "John",
  age: 30,
  isEmployed: true,
  hobbies: ["Snorkeling", "Karate"],
};

console.log(person);

const jsonPersonString = JSON.stringify(person);

console.log(jsonPersonString);

const people = [
  {
    name: "John",
    age: 30,
    isEmployed: true,
    hobbies: ["Snorkeling", "Karate"],
  },
  {
    name: "Graham",
    age: 34,
    isEmployed: false,
    hobbies: ["Chess", "Karate"],
  },
  {
    name: "Rihane",
    age: 27,
    isEmployed: false,
    hobbies: ["Snorkeling", "Karate"],
  },
];

const jsonPeopleString = JSON.stringify(people);

console.log(jsonPeopleString);

// use of parse()

const jsonNames = `["Nelson", "John", "Mary", "Peter", "Susan"]`;

const jsonPerson = `{"name":"John","age":30,"isEmployed":true,"hobbies":["Snorkeling","Karate"]}`;

const jsonPeople = `[
{"name":"John","age":30,"isEmployed":true,"hobbies":["Snorkeling","Karate"]},
{"name":"Graham","age":34,"isEmployed":false,"hobbies":["Chess","Karate"]},
{"name":"Rihane","age":27,"isEmployed":false,"hobbies":["Snorkeling","Karate"]}]`;

console.log(JSON.parse(jsonNames));
console.log(JSON.parse(jsonPerson));
console.log(JSON.parse(jsonPeople));

/* fetch()

    - function used for making HTTP requests to fethc resources
    (JSON style data, images, files)
    Simplifies asynchronous data fetching in Javascript and used for interacting
    with APIs to retrieve and send data asynchronously over the web.
    fetch(url,{method: "", .....})


*/

console.log("***** FETCH FUNCTION *****");

fetch("person.json")
  .then((res) => res.json()) // res.json() also returns a promise
  .then((data) => console.log(data));

fetch("people.json")
  .then((res) => res.json()) // res.json() also returns a promise
  .then((values) => values.forEach((value) => console.log(value.name)));

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  .then((response) => {
    if (!response.ok) {
      throw Error("Something went wrong");
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
