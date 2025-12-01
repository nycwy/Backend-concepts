// let cars = { tyres: 4 };
// let tesla = {
//     driver: 'AI'
// }

// Object.setPrototypeOf(tesla, cars);
// console.log(tesla, Object.getPrototypeOf(tesla));

// function Cars(make, model) {
//     this.make = make;
//     this.model = model;
// }

// let myCar = new Cars("Tesla", "Sky");
// console.log(myCar)

// class Vehicle{
//     constructor(name, model) {
//         this.name = name;
//         this.model;
//     }
//     tyres() {
//         return `${this.name} has 4 tyres`;
//     }
// }

// class Car extends Vehicle {
//     drive() {
//         return `${this.make}: This is an inheritance property`
//     }
// }

// let Tesla = new Car("Tesla", "Falcon");
// console.log(Tesla)
// console.log(Tesla.tyres());

// let vehOne = new Vehicle("Tata", "Safari");
// console.log(vehOne.tyres())

// class BankAccount{
//     #balance = 0;
    
//     deposit(amount) {
//         this.#balance += amount;
//     }

//     getAmount() {
//         return `$ ${this.#balance}`;
//     }
// }

// let myAcc = new BankAccount();

// console.log(myAcc.getAmount());

// Q1
// class Student{
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }
//     details() {
//         return `Name: ${this.name} | Age: ${this.age} | Grade: ${this.grade}`;
//     }
// }

// let Student1 = new Student("Ram", 20, 12);
// let Student2 = new Student("Sita", 19, 11);
// console.log(Student1.details());
// console.log(Student2.details());

// Q2
// class Car{
//     constructor(brand, year) {
//         this.brand = brand;
//         this.year = year;
//     }
//     getAge() {
//         let dateNow = new Date().getFullYear();
//         let age = dateNow - this.year;
//         return `${age} Year`;
//     }
// }

// let myCar = new Car("Tesla", 2021);
// console.log(myCar.getAge());

// Q3
// class Rectangle{
//     constructor(width, height) {
//         this.width = width;
//         this.height = height
//     }

//     area() {
//         let area1 = this.width * this.height;
//         return `Area of Rectangle is: ${area1}`
//     }

//     perimeter() {
//         let perimeter1 = 2 * (this.width + this.height);
//         return `Perimeter of Rectangle ${perimeter1}`
//     }
// }

// let recMes = new Rectangle(2, 3);
// console.log(recMes.area());
// console.log(recMes.perimeter());

// Q4
// class Animal{
//     makeSound() {
//         console.log("Some sound....");
//     }
// }

// class Cat extends Animal{
//     makeSound(){
//         console.log("Meow!");
//     }
// }

// class Dog extends Animal{
//     makeSound() {
//         console.log("Bark!");
//     }
// }

// let cat = new Cat();
// cat.makeSound()

// let dog = new Dog();
// dog.makeSound()

// Q5
// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Employee extends Person{
//     constructor(name, age, salary) {
//         super(name, age)
//         this.salary = salary;
//     }
//     work() {
//         console.log("Full-time");
//     }
// }

// let emp1 = new Employee("Ram", 24, 20000);
// console.log(`${emp1.name} is ${emp1.age} years old and earns RS.${emp1.salary}`);

// Q6
// class BankAccount{
//     #balance = 0;
    
//     deposit(amount) {
//         this.#balance += amount;
//     }

//     withdraw(amount) {
//         if (amount > this.#balance) {
//             console.log("Insufficient balance");
//         } else {
//             this.#balance -= amount;
//             console.log("Remaining balance is: ", this.#balance);
//         }
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// let myAcc = new BankAccount();

// myAcc.deposit(10000);
// myAcc.withdraw(100000)
// console.log(myAcc.getBalance());

// Q7
// class CoffeeMachine{
//     start() {
//         console.log("Coffee is starting...");
//         this.#grindBeans();
//         this.#heatWater();
//         console.log("Coffee Ready!")
//     }

//     #heatWater() {
//         console.log("Heating water...");
//     }

//     #grindBeans() {
//         console.log("Grinding beans...");
//     }
// }

// let btn = new CoffeeMachine();
// btn.start();

// Q8
// class Shape {
//     draw() {
//         console.log("Drawing a shape");
//     }
// }

// class Circle extends Shape{
//     draw() {
//         console.log("Drawing a circle");
//     }
// }

// class Square extends Shape{
//     draw() {
//     console.log("Drawing a square");
//     }
// }

// class Triangle extends Shape{
//     draw() {
//         console.log("Drawing a triangle");
//     }
// }

// let shapeDraw = new Shape();
// let cirDraw = new Circle();
// let sqrDraw = new Square();
// let triDraw = new Triangle();

// shapeDraw.draw();
// cirDraw.draw();
// sqrDraw.draw();
// triDraw.draw();

