
/**
 * 
 * Demonstrates two types of setting prototypes in JavaScript.
 * 
 * Type 1: Using the __proto__ property to set the prototype.
 * 
 * @type {Object} computer - An object representing a computer with a CPU property.
 * @property {number} cpu - The number of CPUs in the computer.
 * 
 * @type {Object} lenovo - An object representing a Lenovo computer with a screen property.
 * @property {string} screen - The type of screen in the Lenovo computer.
 * @property {Object} __proto__ - The prototype of the Lenovo object, which is set to the computer object.
 * 
 * Type 2: Using Object.setPrototypeOf() to set the prototype.
 * 
 * @type {Object} generic - An object representing a generic vehicle with tyres property.
 * @property {number} tyres - The number of tyres on the generic vehicle.
 * 
 * @type {Object} tesla - An object representing a Tesla vehicle with a driver property.
 * @property {string} driver - The type of driver in the Tesla vehicle.
 */
// Type 1: Using the __proto__ property to set the prototype.
const computer = {
    cpu: 4
};

const lenovo = {
    screen: 'LED',
    __proto__: computer
};


console.log(`lenovo `, lenovo.__proto__);

// Type 2: Using Object.setPrototypeOf() to set the prototype.
const generic = {
    tyres: 4
};

const tesla = {
    driver: 'Autopilot'
};

Object.setPrototypeOf(tesla, generic);

console.log(`tesla`, Object.getPrototypeOf(tesla)); // Output: { tyres: 4 }