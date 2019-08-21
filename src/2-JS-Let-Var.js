const carId = 100;
cardId = 5;

/* Let vs Var 
    - Scope and declaration order
    - Better practice to use let over var
    - Let helps you catch errors, complier will not let it compile
*/

// Let cann
console.log(carId); // error
let carId = 42;

console.log(carId); // undefined
var carId = 42;

// Scope
// Let has block scoping
if (true) {
    var foo = 9;
}
console.log(foo); // Get the value 9

if (true) {
    let foo = 9;
}
console.log(foo); // Error!

/* Variables only exists within code block --> Let has block scoping */
