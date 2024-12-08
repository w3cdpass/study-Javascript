
// number. // how it is calling all function to array
/**
 * internally js create calls  { Array } function using new and  this  calls all methods that we can use 
 * 
 * example given below code 
*/


let number = [1, 2, 3];
// let number = new Array(1, 2, 3, 4);
console.log(Object.getPrototypeOf(number))
// console.log(number)


