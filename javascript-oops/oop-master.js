let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'blue',
    start: function() {
        return `${this.make} is started in ${this.year} `;
    }
}

console.log(car.start());




class Vehicle {

    constructor(make,model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.make} has ${this.model}`;
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : this is an inheritance example`;
    }
}

let myCar = new Car('Toyota','Corolla');
console.log(myCar.start());
console.log(myCar.drive());




// Encaupsulation
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getbalance() {
    return `$ ${this.#balance}`;
  }
}



let myAccount = new BankAccount();
myAccount.deposit(100);
console.log(myAccount.getbalance());


// Abstraction

class CoffeeMachine {

    start() {
        return `Starting the coffee machine`;
    }

    brewCoffee() {
        return `Brewing coffee`;
    }

    pressButton() {
        let taskOne = this.start();
        let taskTwo = this.brewCoffee();
        return `${taskOne} and ${taskTwo}`;
    }
}

let myCoffeeMachine = new CoffeeMachine();
console.log(myCoffeeMachine.pressButton());



//Polymorphism

class Bird {
    fly() {
        return `Flying ...`;
    }
}


class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`;
    }
}


let bird = new Bird();
console.log(bird.fly());

let penguin = new Penguin();
console.log(penguin.fly());



//static method

console.log("-----------------Static Method Learning start-----------------");

class Calculator {
    static add(a,b) {
        return a + b;
    }
}

console.log(Calculator.add(2,3));

console.log("-----------------Static Method Learning end-----------------");




// Getter and Setter

console.log("-----------Getter/Setter Method Learning start-----------------");

class Employee {

    #salary;

    constructor(name,salary) {
        
        if(salary < 0) {
            throw new Error('Salary can not be negative');
        }



        this.name = name;
        this.#salary = salary;
    }


    get salary() {
        return `You are not allowed to see the salary`;
    }

    set salary(value) {
        if(value < 0) {
            console.error('Invalid salary');
        } else {
            this.#salary = value;
        }

        
    }
}

let employee = new Employee('John',-50000);
console.log(employee.salary);

employee.salary = -10000;


console.log("-----------Getter/Setter Method Learning end-----------------");


