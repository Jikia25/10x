/* Scenario: You have just started working at a car dealership, and your boss wants you to create a simple database for cars. Your task is to create an object representing a car.
✅ Tasks:
Create an object car with properties: brand, model, and year.
Add a method getInfo that returns a string with the car’s details (e.g., "Toyota Corolla, 2022").
Access, modify, and delete a property, then log the object to see the changes.
*/

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  getInfo: function () {
    return `${this.brand}, ${this.model}, ${this.year}`;
  },
};

car.color = "red";
car.brand = "porsche";
delete car.year;
console.log(car);

/*2. Virtual Assistant – Meet the User! 💬
Scenario: You are developing a virtual assistant that introduces itself when a user interacts with it. Your task is to create a person object that will introduce itself.
✅ Tasks:
Create an object person with properties name and age.
Add a method greet that logs: "Hello, my name is [name] and I am [age] years old."
Call the method and observe how this works inside it.
*/

const person = {
  name: "kristina",
  age: 26,
  greet: function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};
console.log(person.greet());

/* 3. Student Dashboard 🎓
Scenario: Your university is building a student dashboard that allows students to see their personal information in a structured way. Your job is to extract and display student data.
✅ Tasks:
Create an object student with properties: name, age, and grades (an array of numbers).
Use Object.keys(), Object.values(), and Object.entries() to log all information in a structured format */

const student = {
  name: "kristina",
  age: 26,
  grades: [20, 25, 23, 26, 37],
};
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

/*4. The Online Bookstore 📚
Scenario: You are working on an online bookstore system. Your first task is to create a blueprint for storing book details using constructor functions.
✅ Tasks:
Create a constructor function Book that takes title, author, and year as parameters.
Instantiate two books using this constructor and log their details to the console.
*/

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const newBook = new Book("1984", "anonimous", 1949);
console.log(newBook);

/* 5. Virtual Pet Adoption Center 🐶
Scenario: You are developing a virtual pet adoption website where users can adopt different animals. You need to create a class for animals and allow users to see some basic details about their chosen pet.
✅ Tasks:
Create a class Animal with a constructor that takes name and species (e.g., "Buddy", "Dog").
Add a method makeSound() that logs "Animal sound" by default.
Create an instance of the class and call the method.
*/

function Animal(name, species) {
  this.name = name;
  this.species = species;
  this.makeSound = function () {
    console.log("Wuf");
  };
}

const newDog = new Animal("bubu", "hasky");
for (let index = 0; index < 10; index++) {
  newDog.makeSound();
}

/* 6. Secure Banking System 🏦
Scenario: A bank wants a secure system for customer accounts.
 Tasks:
Use a constructor function BankAccount(initialBalance) with a local variable balance.

Implement deposit(amount), withdraw(amount), and getBalance() as methods using closure to access balance.

Ensure balance is only accessible through these methods (not directly on the object).
*/

function BankAccount(initialBalance) {
  let balance = initialBalance;
  function deposit(amount) {
    if (amount > 0) {
      balance += amount;
    } else {
      console.log("invalid deposit");
      return;
    }
  }
  function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      console.log("chashout is succes");
    } else {
      console.log("not enought balance");
    }
  }
  function getBalance() {
    return balance;
  }
  return {
    deposit,
    withdraw,
    getBalance,
  };
}
const newBankAccount = new BankAccount(100000);
newBankAccount.deposit(200000);
newBankAccount.withdraw(100000);
console.log(newBankAccount.getBalance());

/*7. Employee Management System 👨‍💼
Scenario: A company wants to distinguish between regular employees and managers.
 Tasks:
Create a constructor function Employee(name, salary).

Create another constructor Manager(name, salary, department) that calls Employee inside it and adds the department property.

Add a shared method getDetails() using Employee.prototype, and override it for Manager by reassigning the method.
*/

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}
Employee.prototype.getDetails = function () {
  return `Name: ${this.name}, Salary: ${this.salary}`;
};
function Manager(name, salary, department) {
  Employee.call(this, name, salary);
  this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getDetails = function () {
  return `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`;
};
const emp1 = new Employee("Luka", 2500);
console.log(emp1.getDetails());

const mgr1 = new Manager("Sofi", 4000, "IT");
console.log(mgr1.getDetails());

/*
8. Vintage Car Age Calculator 🚘
Scenario: A vintage car owner wants to calculate car age.
 Tasks:
Create a constructor function Car(brand, year).
Add an age() method to Car.prototype that calculates age from current year.
Create car objects and test age().
 */

function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}

Car.prototype.age = function () {
  const currentYear = new Date().getFullYear;
  return currentYear - this.year;
};

const car1 = new Car("Ford", 1975);
const car2 = new Car("BMW", 2000);
const car3 = new Car("Toyota", 2015);

console.log(car1.brand + " is " + car1.age() + " years old.");
console.log(car2.brand + " is " + car2.age() + " years old.");
console.log(car3.brand + " is " + car3.age() + " years old.");

/*
 Hard Assignments
9. Shape Calculator for Architects 🏗️
Scenario: Architects need a tool for shape area calculations.
 Tasks:
Create a constructor function Shape(type).


Create constructor functions Circle(radius) and Rectangle(width, height), reusing Shape.


Use prototype to define getArea() for each shape.


Create instances and log area using getArea().
 */

// Shape constructor
function Shape(type) {
  this.type = type;
}

// Circle constructor
function Circle(radius) {
  Shape.call(this, "circle");
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius;
};

// Rectangle constructor
function Rectangle(width, height) {
  Shape.call(this, "rectangle");
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

// Test instances
const circle1 = new Circle(5);
const rect1 = new Rectangle(10, 20);

console.log(`${circle1.type} area: ${circle1.getArea().toFixed(2)}`);
console.log(`${rect1.type} area: ${rect1.getArea()}`);
