/* Function Scope ***********************************************************
    - variables that can be accessed withiin a function, or nested functions
*/

/* function startCar(CarId) {
    let message = 'Starting...';
}
startCar(123);
console.log(message); */ // Reference error, message has functions scope, when the function finishes executing, it is no longer available

function startCar(carId) {
    let message = 'Starting..';
    let startFn = function turnKey() {
        console.log(message); // 'Starting...' msg is valid since it looks to its parent function, so it is in the same scope
    };
    startFn();
};
startCar(123);

function startCar2(carId) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        let message = 'Override';
    };
    startFn();
    console.log(message); // 'Starting...';
    // When a nested fn uses same variable name as parent, it is legal but it will go out of scope
}
startCar2(123);

/* Block Scope ***********************************************************
    - block refers to a code block, code placed between curly braces
    - block scope - the lifetime of variables as they exist within curly braces (e.g. if statements/ while statements)
*/

/* if ( 5 === 5 ) {
    let message = 'Equal';
}
console.log(message); // Error, message went out of scope when the code block finished
 */

if ( 5 === 5 ) {
    var message = 'Equal';
}
console.log(message); // 'Equal', since var does not use function scope

 let message = 'Outside';
 if ( 5 === 5 ) {
     let message = 'Equal';
     console.log(message);  // Equal
 }
 console.log(message); // Outside
