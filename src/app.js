//import './utils.js';
//Named exports, order does not matter
//could import default as any name, just use the same default export name in the code.
import subtract, { square, add } from './utils.js'; 
import isSenior, { canDrink, isAdult } from './person.js';

console.log('app.js is running');

console.log(square(4));
console.log(add(2,3));

console.log(canDrink(21));
console.log(isAdult(17));
console.log(subtract(5,3));
console.log(isSenior(65));