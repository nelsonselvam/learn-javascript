/* ASYNC / AWAIT

    async - makes a function return a promise

    await - makes a function wait for a promise

    async works together with await. allows to write
    asynchronous code in a synchronous manner.

*/

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

//async - await needs to be used together
async function doChores() {
  try {
    // synchronous execution forcing the code to wait for the promise resolution/rejection
    const walkDogResult = await walkTheDog();
    console.log(walkDogResult);
    const cleanKitchenResult = await cleanTheKitchen();
    console.log(cleanKitchenResult);
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
    console.log("You completed all the chores");
  } catch (error) {
    // catch any errors
    console.error(error);
  }
}

doChores();
