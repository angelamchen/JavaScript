/* IIFE's
    - before modules, needed a way to group code and have it work in isolation, and not interfere with other code 
    - Immediately invoked function expression (immediately running the function after it is declared)
    - Function Expression: taking a function and doing something with it (e.g. assigning it to a variable)
*/ 

(function() {
    console.log('in function');
})(); // this is an example if immediately invoking a function 

let app = (function() {
    let carId = 123;
    console.log('in function');
    return { }; // return value is very important because that is what is assigned to app 
}) (/* arguments would go here, but we have none  */);

console.log(app); // { }

// One value is we can hold variables when creating closures

/* Closures
    - run function => completes => variables and functions go out of scope
    - to let the variables and functions to 'hang around' => use closures
*/

let app2 = (function() {
    let carId = 123;
    let getId = function() {
        return carId; // reaches to the parent function
    };
    return {
        getId: getId  // this is a reference to the function getId, and all the values including the function and carId are also saved   
    };
})();
console.log( app2.getId() );