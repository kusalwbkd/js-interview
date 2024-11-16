//creating an object using Class

/* class Car{
    constructor(make, model, year){
    this.make=make
    this.model=model
    this.year=year
   // console.log(make,model,year);
    
    }

    startEngine(){
        console.log('engine started');
        
    }
}
// Creating instances of Car class
const car1 = new Car('Honda', 'Civic', 2021);
//const car2 = new Car('Tesla', 'Model 3', 2022);

console.log(car1.make);
car1.make='Toyota'
console.log(car1.make); */


//********************************************************************************************************************************************* */

//ENCAPSULATION


/* Encapsulation refers to bundling the data (properties) and behavior (methods) together in a class. 
We can also control the access to this data using private fields or methods (though private fields are a newer feature). */


/* class BankAccount{
    #balance;

    constructor(initialBalance){
   this.#balance=initialBalance
    }

    deposit(amount){
        this.#balance+=amount
    }
    getBalance() {
        return this.#balance;
      }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); */

//The #balance is a private field, and it can only be accessed within the class, ensuring encapsulation.

//********************************************************************************************************************************************* */

//Inheritance

/* class Animal{
    constructor(name){
        this.name=name
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
      }
}

class Dog extends Animal{
    constructor(name,breed){
      super(name)// calls the parent class constructor
        this.breed=breed
    }

    speak() {
        console.log(`${this.name} barks.`);
      }
}

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // Output: Rex barks. */



/* class Shape {
    constructor(color) {
      this.color = color;
    }
  
    describe() {
      console.log(`This is a shape of color ${this.color}.`);
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super(color); // Call parent constructor with color
      this.radius = radius;
    }
  
    describe() {
      super.describe(); // Call parent method
      console.log(`It has a radius of ${this.radius}.`);
    }
  }
  
  const circle = new Circle('blue', 5);
  circle.describe(); */
  // Output:
  // This is a shape of color blue.
  // It has a radius of 5.
  

//********************************************************************************************************************************************* */

//Polymorphisam

/* class Animal {
    speak() {
      console.log('Animal makes a sound.');
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log('Cat meows.');
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log('Dog barks.');
    }
  }
  
  const animals = [new Animal(), new Cat(), new Dog()];
  
  animals.forEach(animal => animal.speak()); */
  // Output:
  // Animal makes a sound.
  // Cat meows.
  // Dog barks.
  //Polymorphism allows you to redefine or override methods in a child class.5
// This means that the same method name can behave differently based on the object that is calling it.

//********************************************************************************************************************************************* */

//Abstraction

/* class CoffeeMachine {
    #waterAmount = 0;
  
    setWaterAmount(amount) {
      if (amount < 0) {
        throw new Error('Water amount cannot be negative');
      }
      this.#waterAmount = amount;
    }
  
    start() {
      if (this.#waterAmount > 0) {
        console.log('Making coffee...');
      } else {
        console.log('Please add water.');
      }
    }
  }
  
  const machine = new CoffeeMachine();
  machine.setWaterAmount(500);
  machine.start(); // Output: Making coffee...

  //In this example, users don’t need to know how the coffee machine operates internally,
  // they just use the interface provided by setWaterAmount and start methods */

  //************************************************************************************************************************ */

  //static methods

/*   Static methods are methods that belong to the class itself rather than instances of the class. 
  You can call them without creating an instance. */
/* 
  class MathUtils {
    static add(a, b) {
      return a + b;
    }
  }
  
  console.log(MathUtils.add(5, 3)); // Output: 8
   */

//************************************************************************************************ */

//SETTERS AND GETTERS

/* class Car {
    #mileage; // Private field
  
    constructor(make, model, year, mileage) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.#mileage = mileage; // Initialize private field
    }
  
    // Getter for mileage
    get mileage() {
      return this.#mileage; // Accessing the private field
    }
  
    // Setter for mileage
    set mileage(value) {
      if (value < 0) {
        console.log('Mileage cannot be negative.');
      } else {
        this.#mileage = value; // Updating the private field
      }
    }
  
    startEngine() {
      console.log(`${this.make} ${this.model} engine started.`);
    }
  }
  
  const myCar = new Car('Toyota', 'Corolla', 2020, 15000);
  
  console.log(myCar.mileage); */ // Output: 15000
  
  // Trying to access the private field directly will result in an error
 // console.log(myCar.#mileage); // SyntaxError: Private field '#mileage' must be declared in an enclosing class
  
  // Trying to set the private field directly will also result in an error
 // myCar.#mileage = 20000; // SyntaxError: Private field '#mileage' must be declared in an enclosing class
  

/* class Car {
    #mileage; // Private field
  
    constructor(make, model, year, mileage) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.#mileage = mileage; // Initialize the private field directly
    }
  
    // Private method to validate mileage
    #validateMileage(value) {
      return value >= 0; // Returns true if mileage is non-negative
    }
  
    // Getter for mileage
    get mileage() {
      return this.#mileage; // Accessing the private field
    }
  
    // Setter for mileage
    set mileage(value) {
      if (this.#validateMileage(value)) {
        this.#mileage = value; // Update mileage using private method validation
      } else {
        console.log('Mileage cannot be negative.');
      }
    }
  
    startEngine() {
      console.log(`${this.make} ${this.model} engine started.`);
    }
  }
  
  // Create a new Car instance
  const myCar = new Car('Toyota', 'Corolla', 2020, 15000);
  
  // Access the mileage using the getter
  console.log(myCar.mileage); // Output: 15000
  
  // Set new mileage using the setter
  myCar.mileage = 20000; // Valid update
  console.log(myCar.mileage); // Output: 20000
  
  // Attempting to set an invalid mileage
  myCar.mileage = -500; // Output: Mileage cannot be negative.
  console.log(myCar.mileage); // Output: 20000 (unchanged)
  */


//*********************************************************************************************************************** */





//***************************************************************************************************************************************** */




