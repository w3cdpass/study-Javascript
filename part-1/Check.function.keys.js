/**
 * let check the key of the function but don't of prototype
 */



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

for (key in usr1) {
    // console.log(key) // it will print all key includeing prototype
    
    // to check function 's keys
    if (usr1.hasOwnProperty(key)) {
        console.log(key)
    }
};