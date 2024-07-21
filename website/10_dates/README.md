- objects that contain values that represent date and time
- new dates initialized using the `Date()` constructor

``` javascript

const date = new Date();

// gives current date
console.log(date);

// extracting date values
const year = date.getFullYear(date);
const month = date.getMonth(date);
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

// setting date parameters
date.setFullYear(2032);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);
console.log(date.getFullYear());

// creating a date with parameters
// Date(year, month, day, hour, minutes, second, ms)
const newDate = new Date(2024, 0, 1, 2, 3, 4, 5);

console.log(newDate);

// creating date using strings
const dateFromString = new Date("2024-06-09T12:00:00Z"); // T - time ; Z - UTC Time

console.log(dateFromString);

const dateFromEpoch = new Date(1700000000000000);

console.log(dateFromEpoch);

// comparing dates
const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1) {
  console.log("Happy New Year!");
}

```