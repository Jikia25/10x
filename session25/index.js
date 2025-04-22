/*Story: Task 1
The evil sorcerer has trapped you in a dungeon with a magical countdown lock. To escape, you need to write a JavaScript function that counts down from n to 1. If you succeed, the lock will open, and you’ll be free!
Instructions:
Write a function countDownFrom(n) that prints numbers from n to 1 using a for loop.
Example:
countDownFrom(5); // Output: 5, 4, 3, 2, 1
*/
function countDownFrom(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
countDownFrom(5);

/* Task 2: Iterate Over an Array (For...of Loop)
Story:
You’re a chef preparing a fruit salad for a royal banquet. The king has given you a list of fruits, and you need to display each one on a golden platter. Use a for...of loop to print each fruit from the array.
Instructions:
Write a function printArrayElements(arr) that prints each element of an array using a for...of loop.
Example:
printArrayElements(["Apple", "Banana", "Cherry"]); // Output: Apple, Banana, Cherry
*/

const fruitsArr = ["Apple", "Banana", "Cherry", "Orange"];

function printArrayElements(fruitsArr) {
  for (let fruit of fruitsArr) {
    console.log(fruit);
  }
  console.log(`there are ${fruitsArr.length} items in this arr`);
}
printArrayElements(fruitsArr);

/* Task 3: Sum of Numbers (While Loop)
Story:
You’re a treasure hunter exploring an ancient cave. The cave has n golden coins scattered around. Use a while loop to calculate the total value of all the coins.
Instructions:
Write a function sumNumbersUpTo(n) that calculates the sum of numbers from 1 to n using a while loop.
Example:
sumNumbersUpTo(5); // Output: 15 (1 + 2 + 3 + 4 + 5)
*/

function sumNumbersUpTo(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum = sum + i;
    i++;
  }
  console.log(sum);
}
sumNumbersUpTo(5);

/*Task 4: Repeat a String (Do...While Loop)
Story:
You’re a wizard casting a spell to create a magical shield. The spell requires you to repeat an incantation n times. Use a do...while loop to ensure the spell is cast correctly.
Instructions:
Write a function repeatString(str, n) that repeats a string n times using a do...while loop.
Example:
repeatString("Hello", 3); // Output: HelloHelloHello

*/

function repeatString(str, n) {
  if (typeof str === "string" && typeof n === "number") {
    let i = 0;
    let result = "";

    do {
      i++;
      result = result + str;
    } while (i < n);
    console.log(result);
  } else {
    console.log(" E R R O R,  Check your argument!");
  }
}
repeatString("Hello", 9);
// This is pro version

/*Task 5: Iterate Over Object Properties (For...in Loop)
Story:
You’re a detective investigating a mysterious object. The object has hidden properties, and you need to uncover them using a for...in loop.
Instructions:
Write a function printObjectKeys(obj) that prints all the keys of an object using a for...in loop.
Example:
printObjectKeys({ name: "Alice", age: 25 }); // Output: name, age
*/

const personObj = {
  name: "Alice",
  age: 25,
};

function printObjectKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}
printObjectKeys(personObj);

/*
Filter Odd Numbers (For Loop)
Story:
You’re a scientist analyzing a dataset of numbers. Your task is to filter out all the even numbers to focus on the odd ones. Use a for loop to achieve this.
Instructions:
Write a function filterOdds(numbers) that removes all even numbers from an array using a for loop.
Example:
filterOdds([1, 2, 3, 4, 5]); // Output: [1, 3, 5]
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function filterOdds(numbers) {
  let newNumbers = [];
  let index = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers[index] = numbers[i];
      index++;
    }
  }
  console.log(newNumbers);
}
filterOdds(numbers);

/* 
Task 2: Find Maximum Value (For...of Loop)
Story:
You’re a treasure hunter searching for the most valuable gem in a cave. The gems are stored in an array, and you need to find the one with the highest value. Use a for...of loop to solve this.
Instructions:
Write a function findMaxValue(numbers) that finds the maximum value in an array using a for...of loop.
Example:
findMaxValue([10, 20, 5, 30]); // Output: 30
*/

function findMaxValue(numbers) {
  let max = numbers[0];
  for (let number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}
/* 
Task 3: Reverse a String (While Loop)
Story:
You’re a spy decoding a secret message. The message is encrypted in reverse, and you need to use a while loop to decode it.
Instructions:
Write a function reverseString(str) that reverses a string using a while loop.
Example:
reverseString("Hello"); // Output: olleH
*/

function reverseString(str) {
  let reversed = "";
  let i = str.length - 1;
  while (i >= 0) {
    reversed += str[i];
    i--;
  }

  return reversed;
}
console.log(reverseString("Hello"));

/*
Task 4: Validate User Input (Do...While Loop)
Story:
You’re a gatekeeper guarding a magical portal. The portal only opens if the user enters a number between 1 and 10. Use a do...while loop to keep asking until the user provides a valid input.
Instructions:
Write a function getValidInput() that repeatedly asks the user for a number between 1 and 10 using prompt(). The function should only stop when a valid input is given.
Example:
getValidInput(); // Keeps asking until a number between 1 and 10 is entered
 */

function getValidInput() {
  let number;
  do {
    number = Number(prompt("please enter any random number 1 to 10"));
  } while (!(number >= 1 && number <= 10));
}
getValidInput();

/* 
Hard tasks
Task 1: FizzBuzz with a Twist
Story:
You’re a wizard participating in a magical tournament. The tournament rules are based on the FizzBuzz game, but with a twist! Use loops to print numbers from 1 to 50 with special rules.
Instructions:
Write a function fizzBuzzTwist() that prints numbers from 1 to 50 with the following rules:
If the number is divisible by 3, print "Fizz".
If the number is divisible by 5, print "Buzz".
If the number is divisible by both 3 and 5, print "FizzBuzz".
If the number contains the digit 3 (e.g., 13, 23), print "Almost Fizz".
Example:
fizzBuzzTwist(); // Output: 1, 2, Almost Fizz, 4, FizzBuzz, ..., 49, Buzz

*/

function fizzBuzzTwist() {
  for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i.toString().includes("3")) {
      console.log("Almost Fizz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzzTwist()

/* 
Task 2: Nested Loops: Multiplication Table
Story:
You’re a math wizard creating a magical multiplication table for your spellbook. Use nested for loops to generate the table up to n.
Instructions:
Write a function printMultiplicationTable(n) that prints the multiplication table up to n using nested for loops.
Example:
printMultiplicationTable(5); // Output: 1x1=1, 1x2=2, ..., 5x5=25

*/

function printMultiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}printMultiplicationTable(5);

/* 
Task 3: Modify Array While Looping
Story:
You’re a time traveler fixing a corrupted timeline. The timeline is represented as an array with duplicate events. Use loops to remove duplicates and restore the timeline.
Instructions:
Write a function removeDuplicates(arr) that removes duplicate elements from an array while looping through it. Be careful not to skip elements!
Example:
removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // Output: [1, 2, 3, 4, 5]

*/

function removeDuplicates(arr) {
  let result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}


 