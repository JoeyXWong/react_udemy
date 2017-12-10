import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log(validator.isEmail('test@gmail.com'));

const template = <p>THIS IS JSX FROM WEBPACK!</p>;
ReactDOM.render(template, document.getElementById('app'));