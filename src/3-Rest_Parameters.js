/* Rest Parameters
    - Rest parameter to collect any amount of args to a function
    - Rest parameter must be last
    - allows the representation of an indefinatey number of arguments as an array
    - last parameter can be prefixed with ... which will cause all remaining arguments to be placed within an standard js array
    - Are specific JS array instances
*/

// Examples
function sendCars(...allCarIds) {
    allCarIds.forEach( id => console.log(id));
}
sendCars(100, 200, 555);


function sendCarsMultiParam(day, ...allCarIds) {
    allCarIds.forEach( id => console.log(id));
}
sendCarsMultiParam('Monday', 100, 200, 555);

// 100 200 555