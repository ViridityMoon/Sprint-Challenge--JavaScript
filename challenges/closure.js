// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
  // The nestedFunction is nested within myFunction and therefore can access the variable within myFunction as well, this is refers to closure.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(num1){
  return num1 * (num1 + 1) / 2;
}

sumation(1);
sumation(2);
sumation(3);
sumation(4);
sumation(5);
sumation(6);