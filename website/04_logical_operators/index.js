/* LOGICAL OPERATORS

    These operators are used to manipulate or combine boolean values (true or false).

    AND     &&  -  Returns true if both conditions are true.
    OR      ||  -  Returns true if at least one condition is true.
    NOT     !  -  Reverses the boolean value of a condition.

*/

const temp = 20; // This variable stores the temperature value.

// Joining two conditions using AND
if (temp > 20 && temp <= 30) { // This checks if the temperature is greater than 20 AND less than or equal to 30.
  console.log("The weather is GOOD"); // If both conditions are true, this message is printed.
} else { // If either condition is false, this block of code is executed.
  console.log("The weather is BAD"); // This message is printed if the temperature is not within the specified range.
}

// Joining two conditions using OR
if (temp <= 0 || temp > 30) { // This checks if the temperature is less than or equal to 0 OR greater than 30.
  console.log("The weather is BAD"); // If either condition is true, this message is printed.
} else { // If both conditions are false, this block of code is executed.
  console.log("The weather is GOOD"); // This message is printed if the temperature is within the specified range.
}

const isSunny = false; // This variable stores a boolean value indicating whether it's sunny or not.

if (!isSunny) { // This checks if the value of isSunny is NOT true (meaning it's false).
    console.log("Cloudy"); // If isSunny is false, this message is printed.
}
else { // If isSunny is true, this block of code is executed.
    console.log("Sunny"); // This message is printed if isSunny is true.
}


/* COMPARISON OPERATORS

    These operators are used to compare values.

    =       assigment operator - Assigns a value to a variable.
    ==      comparison operator - Compares if values are equal (ignores data type).
    ===     strict comparison operator - Compares if both values AND data types are equal.
    !=      inequality operator - Compares if values are NOT equal (ignores data type).
    !==     strict inequality operator - Compares if values OR data types are NOT equal.

*/


const PI = 3.14; // This variable stores the value of PI.

if (PI === "3.14") { // This checks if the value of PI is strictly equal to the string "3.14".
    console.log("That is PI"); // If both the value and data type are equal, this message is printed.
}
else { // If the value or data type is not equal, this block of code is executed.
    console.log("That is not PI"); // This message is printed if the value or data type is not equal.
}

