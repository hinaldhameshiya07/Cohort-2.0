// Day-58 Question sheet 2

// SECTION 1: OOPS Thinking with Objects
// 1. Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 2. Add one more method to the same object that increases the price by 10 percent.
// 3. Now imagine you need 10 laptops with same structure but different data. Write down (in words or code) what problems you will face if you keep using plain objects.

let laptop1 = {
  brand: "ABC",
  price: 80000,
  start: function () {
    console.log(this.brand, "Laptop started");
  },
  increasePrice: function () {
    this.price = this.price + (this.price * 10) / 100;
    console.log(this.price);
  },
};
console.log(laptop1.brand);
console.log(laptop1.price);
laptop1.start();
laptop1.increasePrice();

class Laptop2 {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  start() {
    console.log(this.brand, "Laptop Started...");
  }
  increasePrice() {
    this.price = this.price + (this.price * 10) / 100;
    console.log(this.price);
  }
}
let obj1 = new Laptop2("Honor", 80000);
let obj2 = new Laptop2("Dell", 60000);
let obj3 = new Laptop2("HP", 55000);
let obj4 = new Laptop2("Lenovo", 70000);
let obj5 = new Laptop2("Asus", 65000);
let obj6 = new Laptop2("Acer", 50000);
let obj7 = new Laptop2("Apple", 120000);
let obj8 = new Laptop2("MSI", 90000);
let obj9 = new Laptop2("Samsung", 75000);
let obj10 = new Laptop2("Crome Book", 75000);

obj1.start();
obj1.increasePrice();
obj2.start();
obj2.increasePrice();
obj3.start();
obj3.increasePrice();
obj4.start();
obj4.increasePrice();
obj5.start();
obj5.increasePrice();
obj6.start();
obj6.increasePrice();
obj7.start();
obj7.increasePrice();
obj8.start();
obj8.increasePrice();
obj9.start();
obj9.increasePrice();
obj10.start();
obj10.increasePrice();

// =======================================================

// SECTION 2: Classes and Objects (Reinforcement)
// 4. Create a class named Employee that stores: name salary, Add a method showDetails that prints name and salary.
// 5. Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 6. Explain in your own words: Why is class considered a better option than writing similar objects again and again?

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  showDetails() {
    console.log(this.name, "-", this.salary);
  }
}
let e1 = new Employee("DEF", 45000);
let e2 = new Employee("GHI", 55000);
let e3 = new Employee("JKL", 65000);

e1.showDetails();
e2.showDetails();
e3.showDetails();

// A class is better because we define the structure and behavior once and can create many objects from it. Each object has its own data, while common methods can be shared. This makes the code cleaner, reusable, and easier to maintain.

//  ======================================================

// SECTION 3: Constructor and Initialization
// 7. Create a class named BankAccount. Its constructor should accept accountHolderName and balance.
// 8. Inside the constructor, store both values using this.
// 9. Add a method deposit(amount) that increases the balance.
// 10. Create two bank accounts and deposit money into only one. Observe and explain why the second account is not affected.

class BankAccount {
  constructor(accHolderName, balance, amount) {
    this.accHolderName = accHolderName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
    console.log(
      this.accHolderName,
      "has new",
      this.balance,
      "after deposit",
      amount,
    );
  }
}
let ba1 = new BankAccount("MNO", 5000);
let ba2 = new BankAccount("PQR", 4500);
ba1.deposit(200);

// Why isn't ba2 affected? : Because when you use new BankAccount(...), JavaScript creates a new, separate object.

// =======================================================

// SECTION 4: Understanding this (Very Important)
// 11. Create an object named profile with a property username and a method printName that logs this.username.
// 12. Call the method normally and observe the output.
// 13. Store the method in a separate variable and call it. Observe what happens to this and explain why.
// 14. Modify the code so that this works correctly again.

const userProfile = {
  username: "STU",
  printName: function () {
    console.log(this.username);
  },
};

userProfile.printName();
const print = userProfile.printName;
print();
const correctPrint = userProfile.printName.bind(userProfile);
correctPrint();

// =======================================================

// SECTION 5: Constructor Function and Prototype
// 15. Create a constructor function called Vehicle that accepts type and wheels.
// 16. Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 17. Move the same method to Vehicle.prototype and repeat the test.
// 18. Explain why the prototype approach is preferred.

// 15
function Vehical(type, wheels) {
  this.type = type;
  this.wheels = wheels;
  // 16
  this.describe = function () {
    console.log(this.type + "-" + this.wheels);
  };
}

let v1 = new Vehical("car", 4);
let v2 = new Vehical("truck", 8);
let v3 = new Vehical("bike", 2);

v1.describe();
v2.describe();
v3.describe();

// 17
Vehical.prototype.describePrototype = function () {
  console.log(this.type + "-" + this.wheels);
};

v1.describePrototype();
v2.describePrototype();
v3.describePrototype();

// 18
console.log(v1.describe() === v2.describe());
console.log(v1.describePrototype() === v2.describePrototype());

// The prototype approach is preferred because the same method can be shared by multiple objects instead of creating a separate copy of the function for every object. This reduces unnecessary memory usage and makes the code more efficient, especially when many objects are created. It also keeps common behavior in one place, making the code easier to maintain.

// =======================================================

// SECTION 6: call Method Practice
// 19. Create a function showBrand that prints this.brand.
// 20. Create two different objects with brand values.
// 21. Use call to execute showBrand for both objects.
// 22. Explain what problem call is solving here.

function showBrand(){
    console.log(this.brand);
}
let sb1 = { brand: "TATA" };
let sb2 = { brand: "Reliance" };

showBrand.call(sb1);
showBrand.call(sb2);

// =======================================================

// SECTION 7: apply Method Practice
// 23. Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 24. Create an object with a name property.
// 25. Use apply to call introduce using the object and an array of arguments.
// 26. Explain in simple words how apply differs from call.

function introduce(role,city){
    console.log(this.name+"-"+role+"-"+city);
}
let introObj = { name: "kuch" };

introduce.call(introObj,"kuchbhi","kahibhi");
introduce.apply(introObj,["kuchbhi","kahibhi"]);

//call() and apply() both allow us to set this and execute a function immediately. The main difference is that call() takes arguments separately, while apply() takes the arguments as an array.

// =======================================================

// SECTION 8: bind Method Practice
// 27. Create a function greet that prints “Hello” followed by this.name.
// 28. Bind this function to an object and store the returned function in a variable.
// 29. Call the bound function later and observe the output.
// 30. Explain why bind is useful when functions are executed later or inside callbacks.

function greet(){
    console.log("Hello"+this.name+"...");
}

let greetobj = { name: "user" }

let greetbind = greet.bind(greetobj);
greetbind();