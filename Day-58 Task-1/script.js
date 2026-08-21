// Day-58 Question sheet 1

// SECTION 1: Objects and OOPS Thinking (Foundation)
// 1. Create a user object that stores name and email and has a login method which prints “User logged in”.

const user = {
  name: "abc",
  email: "abc@test.com",
  login: function () {
    console.log("user logged in");
  },
};
console.log(user.name);
console.log(user.email);
user.login();

// 2. Imagine you now have 5 users. First, think how you would manage them without using a class. Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// # approch - 1
const user1 = {
  name: "abc",
  email: "abc@test.com",
  login: function () {
    console.log(`${this.name} logged in`);
  },
};
user1.login();

const user2 = {
  name: "def",
  email: "def@test.com",
  login: function () {
    console.log(`${this.name} logged in`);
  },
};
user2.login();

const user3 = {
  name: "ghi",
  email: "ghi@test.com",
  login: function () {
    console.log(`${this.name} logged in`);
  },
};
user3.login();

const user4 = {
  name: "jkl",
  email: "jkl@test.com",
  login: function () {
    console.log(`${this.name} logged in`);
  },
};
user4.login();

const user5 = {
  name: "mno",
  email: "mno@test.com",
  login: function () {
    console.log(`${this.name} logged in`);
  },
};
user5.login();

// # approch - 2
class UserInfo{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log(this.name + " logged successfully");
    }
}
let user01 = new UserInfo("siya","siya@test.com");
user01.login();
let user02 = new UserInfo("hiya","hiya@test.com");
user02.login();
let user03 = new UserInfo("diya","diya@test.com");
user03.login();
let user04 = new UserInfo("riva","riva@test.com");
user04.login();
let user05 = new UserInfo("reva","reva@test.com");
user5.login();

// 3. Create a product object that stores name and price and has a method which returns the final price after discount.

const procuct = {
    name: "Laptop",
    price: 100000,
    finalPrice: function(discount){
        return this.price - (this.price * discount / 100);
    }
}
console.log(procuct.name);
console.log(procuct.price);
console.log(procuct.finalPrice(10)); 

// -------------------------------------------------------

// SECTION 2: Classes and Objects
// 4. Create a Car class with the following: brand speed a drive method that prints the car brand and speed
// 5. Create two different car objects from the same class and verify that their data is different.
// 6. Answer this in your own words: If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

class Car{
    constructor(bname, bspeed){
        this.bname = bname;
        this.bspeed = bspeed;
    }
    drive(){
        console.log(this.bname+" is driving at "+this.bspeed);
    }
} 
let c1 = new Car("TATA","180 km/h");
c1.drive();
let c2 = new Car("BMW","150 km/h");
c2.drive();

// If classes did not exist, I would have to create separate objects for each car and repeat the same properties and methods again and again. When the project becomes large, this can make the code repetitive, difficult to maintain, and harder to update. Classes help us create a common structure that can be reused for many objects.

// -------------------------------------------------------

// SECTION 3: Constructor and this keyword
// 7. Create a Student class whose constructor accepts name and roll number. Add a method introduce that prints both values.
// 8. Inside the constructor, set values using this. Then try removing this and notice what error occurs and why. 
// 9. Create an object with two methods: One method using a normal function One method using an arrow function

class Student{
    constructor(sname,srollno){
      this.sname = sname;
      this.srollno = srollno; // this refers to the current object being created.
    }
    print(){
        console.log(this.sname+"-"+this.srollno);
    }
};
let s1 = new Student("ABC",10);
s1.print();

let e1 = {
  approch1: function(eaname1){
    this.eaname1 = eaname1;
    console.log(this.eaname1);        
  },
  approch2: (eaname2)=>{
    this.eaname2 = eaname2;
    console.log(this.eaname2);      
  }
}
e1.approch1("UVW");
e1.approch2("XYZ");
// -------------------------------------------------------

// SECTION 4: Constructor Functions and Prototypes
// 10. Create a User constructor function (do not use class syntax).
// 11. Add a login method in two ways: First, inside the constructor Then, move the method to the prototype
// 12. Create two User objects and compare their login methods using equality. Explain why the result is true or false.

// approch - 1 older JavaScript/OOP approach
function newUser1(fname, femail) {
  this.fname = fname;
  this.femail = femail;
  this.login = function(){
    console.log(this.fname + " logged successfully");
  }
}  

let firstUser = new newUser1("DEF", "def@mail.com");
firstUser.login();
let secondUser = new newUser1("GHI", "ghi@mail.com");
secondUser.login();
console.log(firstUser.login === secondUser.login);


// approch - 2 modern, cleaner approach
class newUser2{
  constructor(uname,uemail){
    this.uname = uname;
    this.uemail = uemail;
  }
}
newUser2.prototype.login = function (){
  console.log(this.uname + " logged successfully");
}
let thirdUser = new newUser2("JKL","jkl@mail.com");
thirdUser.login();
let fourthUser = new newUser2("MNO","mno@mail.com");
fourthUser.login();
console.log(thirdUser.login === fourthUser.login);

// Constructor = object banate/setup karte waqt automatically chalta hai.
// Method = object ka kaam/behavior, normally manually call karte hain.
// Prototype = same method ko multiple objects ke beech share karne ki jagah.

// -------------------------------------------------------

// SECTION 5: call, apply, bind
// 13. Create a function that prints this.name.
// 14. Create an object that contains a name property. Use call to run the function using the object Use apply to run the function using the object Use bind to create a new function and then call it
// 15. Borrow a method from one object and run it for another object using call.

// 13
function printName(city, role) {
    console.log(this.name);
    console.log(city, role);
}

// 14. 
let obj = {
    name: "IDK"
};

// call()
// Arguments are passed normally
printName.call(obj, "Ahmedabad", "Developer");

// apply()
// Arguments are passed as an array
printName.apply(obj, ["Ahmedabad", "Developer"]);

// bind()
// Creates a new function, which we call later
let objBind = printName.bind(obj, "Ahmedabad", "Developer");
objBind();


// 15. Method borrowing
let greetObj1 = {
    name: "user1",
    intro: function () {
        console.log("Hello", this.name);
    }
};
let greetObj2 = {
    name: "user2"
};

greetObj1.intro.call(greetObj2);