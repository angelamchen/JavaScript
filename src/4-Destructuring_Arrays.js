/* Destructuring Arrays
    - Another method to assign values within an array to variables
*/

let carIds = [1, 2, 5];
// Left square brackets means destructuring, taking the array and assigning it to variables
let [car1, car2, car3] = carIds;

console.log(car1, car2, car3);

// Square brackets on left of equal signs indicate des
let vanIds = [1, 2, 3];
let var1, remainingVars;
[var1, ... remainingVars] = vanIds;

console.log(var1, remainingVars)
// 1 [ 2, 5 ]

let ids = [1, 2, 3];
let remaining;
[, ... remaining] = ids;
console.log(remaining);
// [ 2, 5 ]
// each commas skips elements, can have as many commas as you like