const person = {
    name : "Rajesh",
    greet() {
        console.log(`Hi ${this.name}`)
    }
}

person.greet(); // Hi Rajesh

const greetFunction = person.greet;
greetFunction(); // Hi undefined


const boundGreet = person.greet.bind({name:"John"})
boundGreet(); // Hi John


// bind, call and apply
/*
const anotherPerson = {
    name: "Jane"
};

person.greet.call(anotherPerson); // Hi Jane
person.greet.apply(anotherPerson); // Hi Jane

const yetAnotherPerson = {
    name: "Doe"
};

const greetWithCall = person.greet.call(yetAnotherPerson); // Hi Doe
const greetWithApply = person.greet.apply(yetAnotherPerson); // Hi Doe

*/