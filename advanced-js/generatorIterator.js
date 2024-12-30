function* numberGenerator() {

    yield 1
    yield 2
    yield 3
}


let gen = numberGenerator()
let genTwo = numberGenerator();

console.log(gen);

//console.log(gen.next());

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


console.log(genTwo.next().value);
console.log(genTwo.next().value);

/* 
Note : 

- Generator functions are defined using the function* syntax.

- Generators are functions that can be paused and resumed (i.e., Generator functions does not execute things all at a once and actually create things on resume basis).


*/