// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

x =5;
console.log(x);
var x;

// Using a let variable before it is declared will result in a ReferenceError

car = 'BMW';
console.log(car);
let car;

// Using a const variable before it is declared, is a syntax errror, so the code will simply not run.

car = 'BMW';
console.log(car);
const car;
