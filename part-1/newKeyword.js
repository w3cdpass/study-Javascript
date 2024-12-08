// new keyword

// small example

// what is new keyword ?
// create a empy object => this = {}
// return this the empty object
// make a chaining between function and prototype like __proto__
// syntax : Object.create(functionName.prototype) => new


function createUsr(fstName, age) {
    this.fstName = fstName;
    this.age = age;
};
createUsr.prototype.hobby = function(){ return this.fstName, this.age}

const usr1 = new createUsr("gamer", 5);
// console.log(usr1.hobby())


// bigger example

