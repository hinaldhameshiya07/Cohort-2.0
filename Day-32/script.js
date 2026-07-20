// Level 1 – Pure Beginner Practice

// 1. print number from 1 to 10 loop from 1 to 10 and print each number.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. print only even numbers from 1 to 20 use a loop and condition to print only even ones.

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even number`);
  } else console.log();
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 3. print no from 10 to 1 reverse loop with a dcrement

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 4. print 5 times "yes"

for (let i = 0; i < 5; i++) {
  console.log("Yes");
}

// 5. Ask the user for a number and print whether each
// number from 1 to that number is even or odd. (e.g., "1 is odd", "2 is even", ... )

let num = prompt("Enter a number :");
console.log(`from 1 to ${num} odd and even number :`);
for (let q = 1; q <= num; q++) {
  q % 2 === 0 ? console.log(`${q} is even`) : console.log(`${q} is odd`);
}

// 6. ask user for a number and say if its positive or negetive use prompt and condition

// string convert into number : 1. parseInt() 2. Number 3. +

let digit = +prompt("Enter a number :");
let result =
  digit > 0
    ? console.log(`${digit} is positive`)
    : console.log(`${digit} is negative`);
console.log(result);

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

let age = prompt("Enter a number : ");
console.log(age);
if (age === null) console.error("you pressed enter...!!!");
else {
  if (age.trim() === "") {
    // "__leading space__  hi  __traling space__"
    console.error("bhai dhang se likhle...!!!");
  } else {
    age = Number(age.trim());
    // if user enter charcter then age=nan in js nan===nan is false and if we want to check where it is equal or not then isNAN() function is used.
    if (isNaN(age)) {
      console.error("bhai please number dede...!!!");
    } else {
      if (age >= 18) console.log("Eligible");
      else console.log("Not eligible");
    }
  }
}

// optimized code :
// let input = prompt("Enter a number : ");

// if (input === null) {
//     console.error("You pressed cancel...!!!");
// } else if (!(input = input.trim())) {
//     console.error("Bhai dhang se likhle...!!!");
// } else if (isNaN(input)) {
//     console.error("Bhai please number dede...!!!");
// } else {
//     console.log(Number(input) >= 18 ? "Eligible" : "Not eligible");
// }

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

let counter = 0;
for (let i = 1; i <= 15; i++) {
  if (i > 8) {
    counter++;
    console.log(i);
  }
}
console.log(`Total Count is ${counter}`);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

let password = "Times_24*7";
let pass = prompt("Enter your password : ");
if (pass == null) {
  console.error("You Pressed Cancel");
} else if (!(pass = pass.trim())) {
  console.error("Bhai dhang se likhle...!!!");
} else if (pass === password) {
  console.log("Password mathched...!");
} else {
  console.error("Wrong passeord please enter correct password...!!!");
}

// Level 2 – Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let attempt = 0;
let passs;
let passwordd = "Times_24*7";
while (attempt < 3) {
  passs = prompt("Enter your password : ");
  if (passs == null) {
    console.error("You pressed cancel...!!!");
  } else if (passs === passwordd) {
    console.log("Password matched...!");
    break;
  } else {
    console.error("Wrong password please enter correct password...!!!");
  }
  attempt++;
  console.log(`attempt ${attempt}`);
  if (attempt === 3) {
    console.error("Too many attempts... Your account is Locked...!!!");
  }
}

// optimized code :
// let attempt = 0;
// const password = "Times_24*7";
// let pass;
// while (attempt < 3) {
//     pass = prompt("Enter your password : ");
//     attempt++;
//     if (pass === password) {
//         console.log("Password matched...!");
//         break;
//     }
//     console.error("Wrong password please enter correct password...!!!");
// }
// if (attempt === 3 && pass !== password) {
//     console.error("Too many attempts... Your account is Locked...!!!");
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

let count = 0;
let word;
while (word !== "stop") {
  word = prompt("Enter a word: ");
  console.log(word);
  if (word === "yes") count++;
}
console.log(`Total word yes count : ${count}`);

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

for (let i = 1; i < 50; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

let sum = 0;
for (let i = 1; i < 30; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    sum += i;
  }
}
console.log(`Total sum is : ${sum}`);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

let askNum;
while (askNum % 2 !== 0) {
  askNum = +prompt("Enter a word: ");
  console.log(askNum);
}

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

let start = +prompt("Enter start number :");
let end = +prompt("Enter end number :");
if (start > end) console.error("start can not be bigger then end");
for (let i = start; i <= end; i++) {
  console.log(i);
}

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

let oddcount = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 0 !== 0) {
    oddcount++;
    console.log(i);
    if (oddcount === 3) {
      break;
    }
  }
}

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

let numPos;
let timer = 0;
for (let i = 0; i < 5; i++) {
  numPos = +prompt("Enter number: ");
  console.log(numPos);
  if (numPos >= 0) {
    timer++;
  }
}
console.log(`Total positive number is : ${count}`);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”
// Displaying ques.txt.

let balance = 1000;
let attempts = 0;
while (attempts < 3) {
  let amount = Number(prompt("Enter withdrawal amount:"));
  if (amount <= balance) {
    balance -= amount;
    console.log(`₹${amount} withdrawn successfully`);
    console.log(`Remaining balance: ₹${balance}`);
  } else {
    console.error("Insufficient balance");
  }
  attempts++;
}
