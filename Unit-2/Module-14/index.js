/* Only Odds */

/*
Create code that takes an array of numbers and outputs a new array 
with only the odd numbers from the input array 
if there is only one odd number, return that in an array 
*/

//these console logs were added for increased readability in console
console.log("---------");
let inputArray = [2,4,6,8,11,20,15,22];
// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let inputArray = [70, 42, 55, 81, 21, 91, 34];
// let inputArray = [2, 4, 6, 8, 10, 11, 12]; 

let outputArray = [];
for (let i = 0; i < inputArray.length; i++){
    //number will be the specific number in the array that it is currently looping through
    let number = inputArray[i];
    //if the current number is even, continue the loop
    if (number % 2 === 0){ 
        continue;
    //if the current number is not even, push it to the outputArray 
    } else {
        outputArray.push(number);
    }
}
console.log(outputArray);

/* Vowels vs. Consonants */ 

/* 
Write code block that accepts a string of lowercase letters and 
prints the input word followed by the count of consonants and vowels
-
initialize a count for consonants and a separate count for vowels 
use a for loop to parse the input string
for each loop iteration, read the character at the current index 
    - if character is vowel, vowel++
    - else, character is consonant, so consonant++
- return a string formatted like `${inputWord} has ${consonantCount} consonants and ${vowelCount} vowels.`
*/

console.log("---------");
let inputWord = "hello";
// let inputWord = "ukelele";
// let inputWord = "awesome";
// let inputWord = "onomonopia";
// let inputWord = "textbook";


let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < inputWord.length; i++) {
    //character will hold the current character of the input word that the loop is iterating on
    let character = inputWord[i];
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
        vowelCount++;
    } else {
        consonantCount++;
    };
}
let returnString = `${inputWord} has ${consonantCount} consonants and ${vowelCount} vowels`;
console.log(returnString);

/* Reverse Array */

/* 
Write a foor loop that takes an array of numbers and returns a new array featuring those numbers but in reverse order 
-
the input is an array of numbers 
use slice() to extract the entire array starting from the end by setting the startIndex count to -1 
if 
*/
console.log("---------");
let numberArray = [1, 2, 3];
// let numberArray = [1, 3, 5, 7, 9, 11];
// let numberArray = [20, 50, 30, 60, 200];
// let numberArray = [1, -1, 2, -3, 5, -8, 13];
let newArray = [];

for (let i = 0; i < numberArray.length; i++) {
    let currentNum = numberArray[i];
    newArray.unshift(currentNum);
}
console.log(newArray);

/* FizzBuzz */

/*
Create a script that prints each number from 1-100 on a line
For multiples of 3, print "Fizz"
for multiples of 5, print "buzz"
for multiples of 3 and 5, print "fizzbuzz"
--

Use for loop starting at 0 
If/else conditionals to set up the multiple conditions 
else, print the number
*/
console.log("---------");

for (let i = 1; i < 101; i++) {
    //multiple of 3 and 5
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("Fizzbuzz");
    //multiple of 3
    } else if ( i % 3 === 0) {
        console.log("Fizz");
    //multiple of 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
    //not a multiple of 3 or 5
    } else {
        console.log(i);
    }
}

console.log("---------");