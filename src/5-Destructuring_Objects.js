/* Destructurin Objects
    - different syntax
*/

let car = { id: 500, style: 'convertible' };
let { id, style } = car;

console.log(id, style)
// 5000 convertible

let car = { id: 500, style: 'convertible' };
let id, style;
// { id, style } = car;  ==>  error since curly braces are used for code blocks and objects, so complier is confused
({ id, style } = car);

console.log(id, style)
// 5000 convertible