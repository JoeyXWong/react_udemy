class Person {
    constructor(name = 'Default name', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name} !`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major = 'Undecided'){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return (this.major !== 'Undecided');
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        } 
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, travelingLocation){
        super(name, age);
        this.travelingLocation = travelingLocation;
    }

    getGreeting(){
        let greeting = `Hi. I am ${this.name}.`
        if(this.travelingLocation){
            greeting += ` I'm visiting from ${this.travelingLocation}.`;
        }
        return greeting;
    }
}

const me = new Student('Joey Wong', 29, 'Computer Science');

console.log(me.name);
console.log(me.getDescription());

const otherName = new Traveler('Andrew Mead', 29, 'Philadelphia');

console.log(otherName.name);
console.log(otherName.getGreeting());