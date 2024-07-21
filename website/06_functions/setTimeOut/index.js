/* setTimeOut function

    - function in JS that allows you to schedule the execution of a function after
    and amount of time (ms)
    - Times are approximate (varies based on the JS runtime env.)
    - `setTimeout(callback,delay)`
    -`clearTimeout(timeoutId)` can clear a timeout before it triggers

*/

function hello(){
  window.alert("Hello!")
};

setTimeout(hello,3000);


//using an anonymous function
setTimeout(() => window.alert("Hello"),4000);

const timeoutId = setTimeout(() => window.alert("Bye"),4000);

clearTimeout(timeoutId);

let timeOutId1;

function startTimer(){
  console.log("Started");
  timeOutId1 = setTimeout(()=> window.alert("Hello"), 3000);
}

function clearTimer(){
  console.log("Cleared");
  clearTimeout(timeOutId1);
}