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

console.log(sumation(1));
console.log(sumation(2));
console.log(sumation(3));
console.log(sumation(4));  
console.log(sumation(5));
console.log(sumation(6));