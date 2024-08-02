/* PROMISES

    An object that manages async ops 
    (querying DB, file read/write etc that can take indeterminate amount of time)
    Wrap a promise object {around async code}
    "I promise to return a value"
    PENDING -> RESOLVED or REJECTED
    new Promise((resolve, reject) => {async code})

*/

/* code for callback nesting
function walkTheDog(callback) {
  setTimeout(() => {
    console.log("You walk the dog 🐶");
    callback();
  }, 1500);
}

function cleanTheKitchen(callback) {
  setTimeout(() => {
    console.log("You clean the kitchen 🍽️");
    callback();
  }, 2500);
}

function takeOutTrash(callback) {
  setTimeout(() => {
    console.log("You take out the trash ♻️");
    callback();
  }, 500);
}

// using nested callback aka hell

walkTheDog(() => {
  cleanTheKitchen(() => {
    takeOutTrash(() => console.log("You completed all the chores"));
  });
});
*/

// using method chaining of promises

function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("You walked the dog 🐶");
      } else {
        reject("You didn't walk the dog 🐶");
      }
    }, 1500);
  });
}

function cleanTheKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("You cleaned the kitchen 🍽️");
      } else {
        reject("You didn't clean the kitchen 🍽️");
      }
    }, 1500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTaken = false;
      if (trashTaken) {
        resolve("You take out the trash ♻️");
      } else {
        reject("You didn't take out the trash ♻️");
      }
    }, 500);
  });
}

walkTheDog()    // chain the methods
  .then((res) => {
    console.log(res);
    return cleanTheKitchen();
  })
  .then((res) => {
    console.log(res);
    return takeOutTrash();
  })
  .then((res) => {
    console.log(res); 
    console.log("You completed all the chores");
  }) // on failure - catches rejects
  .catch((err) => console.error(err));
