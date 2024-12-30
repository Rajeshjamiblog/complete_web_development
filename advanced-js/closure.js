/**
 * outer is a function that creates a closure.
 * It initializes a counter variable and returns an inner function.
 * The inner function increments the counter and returns the updated value.
 *
 * @returns {function(): number} A function that increments and returns the counter value.
 */
function outer() {
    let counter = 4;
    return function() {
        counter++;
        return counter;
    } 
}


let increment = outer();

console.log(increment());
console.log(increment());
console.log(increment());