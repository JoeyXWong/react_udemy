import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render( < IndecisionApp / > , document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting() {
        return `Hi, my name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax);
console.log(getGreeting());

//New syntax
//class property syntax from transform-class-properties babel plugin removes the need to bind methods.
class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi, my name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGreeting = newSyntax.getGreeting;
console.log(newSyntax);
console.log(newGreeting());