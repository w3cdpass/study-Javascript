// hoisting in js

// you can do with normal declaration function with func name
// hello();

// function hello() {
//     console.log("hello wotld")
// }

// you can't access `function` before instialization
// e.g.
// using const , let
// tiger()

// const tiger = function () {
//     console.log("this is using function expression")
// }

/** error in console
 * Uncaught ReferenceError: can't access lexical declaration 
 * 'function' before initialization in file.js:12
 * 
 * // using var it show error like this *Uncaught TypeError: gamer is not a function*
gamer();
var gamer = function () {
    console.log("this is some var")
}
*/

// console.log(animal) // * can show the exact value of var *
var animal = "Hippo"
// console.log(animal); // you can extract value of value after var ;



