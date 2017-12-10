//import './utils.js';
//Named exports, order does not matter
import { square, add } from './utils.js'; 
import { canDrink, isAdult } from './person.js';

console.log('app.js is running');

console.log(square(4));
console.log(add(2,3));

console.log(canDrink(21));
console.log(isAdult(17));