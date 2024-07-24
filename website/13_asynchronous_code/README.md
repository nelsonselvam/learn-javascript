## AYSNC - CALLBACKS

   A callback is a function passed as an argument to another function

   This technique allows a function to call another function

   A callback function can run after another function has finished

``` javascript

function func1(callback) {
  setTimeout(() => {
    console.log(1);
    callback(); // forcing the callback to have better control over the sequence
  }, 3000);
}

function func2() {
  console.log(2);
  console.log(3);
  console.log(4);
}

//function passed as an argument to another function
func1(func2);

```