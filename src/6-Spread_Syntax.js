/* Spread Syntax
    - opposite of Rest 
    - take an arrya and spread out elements so it can be assined for parameters
    - taking array and breaking it out to parameters
    - Rest parameters collect elements and store in array, Spread takes array and spreads it out to varies elements
*/

function startCars(car1, car2, car3) {
    console.log(car1, car2, car3);
}

let carIds = [100, 300, 500];
startCars(...carIds);
// 100 300 500

// In JS, Strings and Arrays are called "iterables" since you can iterate through them
// Spread syntax is good for iterables

let carCodes = 'abc';
startCars(...carCodes); // abc

// Using REST and Spread together
function startCarsRest(car1, car2, car3, ...rest) {
    console.log(rest)
}

let restCars = [1, 2, 3, 4, 5, 6];
startCarsRest(...restCars); // [ 4, 5, 6 ]