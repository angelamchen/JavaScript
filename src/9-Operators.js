/* 9-Operators*/

/* Equality Operators ************************************************************
    - compare 2 values if they are equal
    - ==, javascript will try to convert variable to same type 
    - ===, javascript will not do a type conversion, strict equal sign, better sign
*/

const var1 = 1
const var2 = true

if (var1 == var2) { /* js will try and convert to same type */ }
if (var1 === var2) { /* js will not convert types, "strict" equality operator */ }

if (var1 != var2) {}
if (var1 !== var2) {} // types also must be the same

console.log(var1 == var2) // true
console.log(var1 === var2) //false

/* Unary Operators ***********************************************************
    - operate on a single value or variable
    - ++var1 => var1 is incremented before it is used in an expression
    - var1++ => variable 1 is used in some expression and will only be incremented after its use
    - +var1 => changes a string to a numeric operator
    - -var1 changes the sign of a numeric variable => 5 will be -5
*/

let year = 1968
console.log(year++); // 1968
console.log(year); // 1969

let year2 = 1968
console.log(++year2); // 1969

let num = "1987";
console.log(typeof(+num)); // number 

num = "-1987"; 
console.log(-num); // 1987

/* Logical Operators ***********************************************************
    - && > || in precedence
    - null / undefined / 0 are all falsey
*/

let userSetting = null;
let defaultSetting = { name: 'Joe' };
console.log(userSetting || defaultSetting); // { name: 'Joe' }

userSetting = { name: 'User' };
defaultSetting = { name: 'Joe' };
console.log(userSetting || defaultSetting); // { name: 'User' }

let obj = null;
console.log(!obj); // true

/* Relational Operators ***********************************************************
    - >, < >=, <=
    - "Zoo" > "animal" => true since all uppercase come before lowercase from ASCII values
*/

/* Conditional Operators ***********************************************************

*/

console.log((6 > 5) ? true : false); // true

/* Assignment Operators ***********************************************************
    - +=, -=, *=, /=, %=
    - <<= "shift left operator", will take the var and shift its bits to the left 1 bit
    - >>= shift bits to the right
    - >>> shift bits to the right but keep the sign
*/

