function Person(name) {
    this.name = name
}

Person.prototype.greet = function() {
    console.log( `Hello, ${this.name}`);
    return `Hello, ${this.name}`
}

let rajesh = new Person('Rajesh');
console.log(rajesh.greet()); // Hello, Rajesh