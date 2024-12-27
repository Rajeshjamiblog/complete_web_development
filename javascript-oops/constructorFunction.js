/**
 * Represents a person.
 * @constructor
 * @param {string} name - The name of the person.
 * @param {number} age - The age of the person.
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

/**
 * Represents a car.
 * @constructor
 * @param {string} make - The make of the car.
 * @param {string} model - The model of the car.
 */
function Car(make, model) {
  this.make = make;
  this.model = model;
}

/**
 * Represents a tea.
 * @constructor
 * @param {string} type - The type of the tea.
 */
function Tea(type) {
  this.type = type;

  /**
   * Describes the tea.
   * @returns {string} A description of the tea.
   */
  this.describe = function() {
    return `this is a cup of ${this.type} tea`;
  }
}

let myTea = new Tea('Green');
console.log(myTea.describe());


/**
 * Represents an animal.
 * @constructor
 * @param {string} species - The species of the animal.
 */
function Animal(species) {
  this.species = species;
}


// Adding a method to the Animal prototype to describe the sound the animal makes
Animal.prototype.sound = function() { 
  return `The ${this.species} makes a sound`; 
}


// Create a new Animal instance for a dog
let dog = new Animal('Dog');

// Log the sound the dog makes
console.log(dog.sound());

/**
 * Creates an instance of the Animal class with the name 'Cat'.
 * @type {Animal}
 */
let cat = new Animal('Cat');
console.log(cat.sound());




/**
 * Represents a Drink.
 * @constructor
 * @param {string} name - The name of the drink.
 * @throws Will throw an error if the function is not called with the 'new' keyword.
 */
function Drink(name) {
  if(!new.target) {
    throw new Error('Drink must be called with new keyword'); 
  }
  this.name = name;
}

let tea = new Drink('Green Tea');
let coffee = Drink('Latte'); // Error: Drink must be called with new keyword