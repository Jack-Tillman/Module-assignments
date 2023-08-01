
/* 
Submission for John Tillman - I included functions to test the various inputs for each 
problem set, as well as ternary operator versions for the relevant problem sets. 
To test, comment out the code that is outside the function scope (aside from test inputs).
*/

/* Is Truthy */

/* 
Create a JS code block that prints true if the value is truthy, 
and if the value if falsey, it should print a message that indicates 
which type of data value is falsey.
*/


if (input) {
    console.log("true");
} else if (input === false) {
    console.log("The boolean value false is falsy");
} else if (input === null) {
    console.log("The null value is falsy");
} else if (input === undefined) {
    console.log("Undefined is falsy");
} else if (input === 0) {
    console.log("The number 0 is falsy");
} else {
    console.log("The empty string is falsy");
}

/* function to test the inputs */

function isTruthy (value) {
    if (value) {
        console.log("true");
    } else if (value === false) {
        console.log("The boolean value false is falsy");
    } else if (value === null) {
        console.log("The null value is falsy");
    } else if (value === undefined) {
        console.log("Undefined is falsy");
    } else if (value === 0) {
        console.log("The number 0 is falsy");
    } else {
        console.log("The empty string is falsy");
    }
}

isTruthy(true);
isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy(0);
isTruthy("");

/* Number Line */

/* 
create a script that prints out a string specific to where 
the sum of the two inputs fits in on the following sequence: 
sum < -1000, sum < 0, sum === 0, sum > 0, sum > 100
*/

if (num1 + num2 < -1000) {
    console.log(num1 + num2 + " is less than -1000");
} else if (num1 + num2 === 0) {
    console.log(num1 + num2 + " is equal to 0");
} else if (num1 + num2 > 0 && num1 + num2 < 100) {
    console.log(num1 + num2 + " is larger than 0");
} else if (num1 + num2 > 100) {
    console.log(num1 + num2 + " is greater than 100");
} else {
    console.log(num1 + num2 + " is a negative number");
}

/* function to test the inputs */

function numberLine (num1, num2) {
    let sum = num1 + num2;
    if (sum < -1000) {
        console.log(sum + " is less than -1000");
    } else if (sum === 0) {
        console.log(sum + " is equal to 0");
    } else if (sum > 0 && sum < 100) {
        console.log(sum + " is larger than 0");
    } else if (sum > 100) {
        console.log(sum + " is greater than 100");
    } else {
        console.log(sum + " is a negative number");
    }
};

numberLine(50,51);
numberLine(99, -2);
numberLine(0, 101);
numberLine(500, -500);
numberLine(-1000, 0);
numberLine(-5, 0);


/* Greater than Or Equal to 5 */

/* 
Write a JS function that takes two parameters and prints out true if
both parameters are greater or equal to 5, and false if not. 
*/

if (num1 && num2 >= 5) {
    console.log(true);
} else {
    console.log(false);
}

/* ternary version */

(num1 && num2 >= 5) ? true : false;

/* function to test the inputs */

function greaterOrEqualToFive (num1, num2) {
    let sum = num1 + num2;
    if (sum >= 5) {
        console.log(true);
    } else {
        console.log(false);
    }
}

greaterOrEqualToFive(5, 6);
greaterOrEqualToFive(10, 11);
greaterOrEqualToFive(0, 0);
greaterOrEqualToFive(1000, -1000);
greaterOrEqualToFive(6,4);
greaterOrEqualToFive(5, 5);

/* Pair and Compare */

/* 
Use if/else and strict equality to create a JS function that takes 4 parameters, 2 pairs of 2 parameters, 
that prints 'true' if one of the pairs is truthy. otherwise, print false. 
*/


if (param1A === param1B || param2A === param2B) {
    console.log(true);
} else {
    console.log(false);
}

/* ternary version */

(param1A === param1B || param2A === param2B) ? true : false;

/* function to test the inputs */

function pairAndCompare (param1A, param1B, param2A, param2B) {
    if (param1A === param1B || param2A === param2B) {
        console.log(true);
    } else {
        console.log(false);
    }
}

pairAndCompare("cat", "cat", 6, "6");
pairAndCompare("five", 5, "dog", "dawg");
pairAndCompare(0, false, "horse", "horse");
pairAndCompare("eight", "eight", "ate", "ate");
pairAndCompare(11, "eleven", "four", "for");
pairAndCompare("cake", "cake", "pie", "pie");