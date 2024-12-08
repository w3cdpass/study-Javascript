// revision previous code
function hello() {
    console.log("hello")
};

// javascript is function  + with + function + object

// console.log(hello.name) // output will be function name

// you can add your own properties
hello.myprope = "unqiue value"
// console.log(hello.myprope)

/**
 *  name properties will tells ==> function name
 *  function provides more usefull properties 
 */

// important

/**
 *  only function give you free space in object ={}
 * like function provide prototype property
 * for example:- 
 */
// console.log(hello.prototype) // output will be empty object = {}
// only function gives us prototype property ...


// then how to use this empty prototype

hello.prototype.animal = "lion"
hello.prototype.habit = "hunting"
hello.prototype.meal = "meat"
hello.prototype.jungle = function(){return `Go ${this.animal} for ${this.habit} to eat ${this.meal}.`}
console.log(hello.prototype.jungle())

console.log(hello())