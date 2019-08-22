/* TypeOf(), Common Type Conversion
    - Javascript built in function to find the type of a constant or literal value
*/

typeof(1); // number
typeof(true); //boolean
typeof('Hello'); //string
typeof( function(){} ); //function
typeof({}); //object
typeof(null); //object
typeof(undefined); // notdefined
typeof(NaN); // number, its a number that has gone wrong

// convert to string
let foo = 45;
console.log(foo.toString());

// convert string to integer
Number.parseInt('55'); // 55 as a number

// convert stringer to a number
Number.parseFloat('55.99') // 55.99 as a number

console.log( Number.parseInt('55ABC')) // 55
console.log( Number.parseFloat('55.anv')) // 55
console.log( Number.parseFloat('ABC55')) // NaN

// When calling these, has to make sure it starts as a number, doesn't need to end as a number