var nameVar = 'Joey';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    var petName = 'Hal';
    return petName;
}

var fullName = 'Joey Wong';

if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}