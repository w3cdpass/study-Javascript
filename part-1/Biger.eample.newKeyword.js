// bigger example of the new keyword

// creating of new keyword
// 1.) this = {}
// 2.) return a { this } keyword as a empty object
// 3.) smaller version of = Object.create(functionName.prototype) ==> to { new } keyword

// __proto__
// official ecmascript document
// [[prototype]]

// __proto__ will make chaining and equal to prototype


// constructor function

function CreateUsr(fstName, lstName, age, email, address) {
    // const usr = Object.create(createUsr.prototype); // give a empty object with __proto__ refrence
    // const usr = {};

    // use of new

    this.fstName = fstName; // usr.fstName = fstName;
    this.lstName = lstName; // usr.lstName = lstName;
    this.age = age;         // usr.age = age;
    this.email = email;     // usr.email = email;
    this.address = address; // usr.address = address;
    
    // return usr; // comment this because { this } keyword it will return all above 
    
};


const usr1 = new CreateUsr("Hunting", "dear", 23, "mail@to.me", "nigga");
CreateUsr.prototype.about = function () { return `${this.fstName}  ${this.lstName}` }; // wrong syntax ; return this.fstName, this.age ==> not print first var it will print second instead

console.log(usr1.about())