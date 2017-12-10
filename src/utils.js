console.log('utils.js is running');

const square = (x) => x*x;

const add = (a, b) => a+b;

const subtract = (a, b) => a-b;

export { square, add, subtract as default }; //can only have one default export in this format

//export default subtract; //inline ways of exporting default
//or this way
// export default (a, b) => a-b;
//Or you can export like this...
//export const square = (x) => x*x;