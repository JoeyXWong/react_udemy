//arguements object - no longer bound with arrow functions

const add = function(a,b){
    console.log(arguments);
    return a + b;
};
console.log(add(55,1));

// this keyword - no longer bound

const user = {
    name: 'Joey',
    cities: ['NY', 'NJ', 'Dublin'],
    printPlacesLived(){

        const cityMessages = this.cities.map((city)=> `${city}!`);

        return cityMessages;

        this.cities.forEach((city)=>{
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

console.log(user.printPlacesLived());

const multiplier ={
    numbers: [1,2,3,4,5],
    multiplyBy: 3,
    multiply(){
     return this.numbers.map((number)=> number * this.multiplyBy);   
    }
}
console.log(`new Array is ${multiplier.multiply()}`);