// # 🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)

// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

function sayHello() {
  console.log("Hello JavaScript");
}
sayHello();

// 2. Create a function `add(a, b)` that returns their sum and log the result.

function add(a, b) {
  return a + b;
}
let sum = add(93168, 36070);
console.log(sum);

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

function greeting(name = "Guest") {
  console.log(`Hi ${name}`);
}
greeting("Mahi");

// 4. Use rest parameters to make a function that adds unlimited numbers.

let numbers = [];
while(true){
    let inputInfi = prompt("Enter no to sum : ");
    if(inputInfi === "stop") break;
    numbers.push(+inputInfi);
}
function addInfi(...numbers){
    let sumInfi = numbers.reduce(function (a,b){
        return a+b;
    },0);
    console.log(sumInfi);
}
addInfi(...numbers);

// 5. Create an IIFE that prints `"I run instantly!"`.

(function () {
  console.log("I run instantly!");
})();

// 6. Make a nested function where the inner one prints a variable from the outer one.

function inner() {
  let innerval = "|| Dharmo rakshiti rakshata: ||";
  return function () {
    console.log(innerval);
  };
}
let io = inner();
io();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

let fruits = ["apple", "banana", "cherry", "watermelon"];
fruits.push("kiwi");
fruits.unshift("Mango");
console.log(fruits);

// 8. Use a `for` loop to print all elements of an array.

for (let j of fruits) {
  console.log(j);
}

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

let person = {
  name: "ajit",
  age: 81,
  city: "Delhi",
};
for (let key in person) {
  console.log(key, person[key]);
}

// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.

setTimeout(function () {
  console.log("Time's up!");
}, 2000);

// ---------------------------------------------------------------------------------------------

// # 🟡 Level 2 – Functional Thinking & Logic Tasks (Intermediate)

// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.

function runTwice(rt) {
  rt();
  rt();
}
runTwice(function () {
  console.log("Hello hiii...");
});

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

let global = 47;
function pure(val1, val2) {
  console.log(val1 + val2);
}
function impure(val) {
  global++;
  console.log(val + global);
}
pure(10, 20);
pure(10, 20);
impure(2);
impure(2);

// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.

function objDes({ name, age }) {
  console.log(name, age);
}
objDes({ name: "siddhi", age: 21, email: "test@gmail.com" });

// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).

// normal function : ES5 / when NF used as object method with this kayword it will not loose it's value...
// fat arrow function : ES6 / when FAF used as object mthhod with this keyword it will loose it's value...

let obj1 = {
  name: "xyz",
  NF: function () {
    console.log(this);
  }, // this == object NF - NF object object rewind ho jata hai fir se window ban jata hai
  FAF: () => {
    console.log(this);
  }, // this == window FAF takes value from parent = obj, scope = global, window
};
obj1.NF();
obj1.FAF();
// so rule is alwaays make FAF inside the NF...

// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr1 = arr.map(function (val) {
  return val * val;
});
console.log(arr1);

// 6. Use `filter()` to get only even numbers from an array.

let arr2 = arr.filter(function (val) {
  return val % 2 === 0;
});
console.log(arr2);

// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

let salary = [1000, 2000, 3000];
let arr3 = salary.reduce(function (acc, val) {
  return acc + val;
}, 0);
console.log(arr3);

// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).

let names = ["moh", "maya", "ruh", "shree", "tom"];
let someName = names.some(function (val) {
  return val.length > 3;
});
let everyName = names.every(function (val) {
  return val.length > 3;
});
console.log(someName);
console.log(everyName);

// 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.

let obj2 = {
  name: "maya",
  age: 20,
  email: "maya@test.com",
};
Object.freeze(obj2); // it freeze the object if change value it can't change it and can't add...
// Object.seal(obj2); // seal : we can update it's value but can't add new value...

// 10. Create a nested object (`user → address → city`) and access the city name inside it.

let nestObj = {
  user: {
    name: "bhervi",
    address: {
      city: "bhopal",
    },
  },
};

let {city} = nestObj.user.address;
console.log(nestObj.user.address.city, city);