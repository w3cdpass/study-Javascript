/ Primitive vs Refrence data types /

// Primitive Data types
// \How  it's stores/
// it works like stack memory
/**
 *              *
 *              *
 *              *
 *       10     *
 *        9     *
 *        6     *
 *        5     *
 * ______4______*
 *      fig:1
 * */
/**Primitive it store a data in new memory like 
 * num1 = 4  it store in new memo  with stack fiqure:1 
 * when we assign to num2  = num1 it store a new memo to 
 * then we can change it's value like num1++; or num2++ 
 * it will increase 4 = 5 and 5 = 6
 *  */


// let num1 = "90";
// let num2 = num1;
// num2++
// console.log(num2)



// Refrence Data types
/**
 * Array Will stored in Heap in computer like cloud ["item1", "item2"]
 */




let arry1 = ["Mango", "Bottle guard"]
let ar2 = arry1

console.log(ar2.push("Cucumber"))
console.log("array2",ar2)
console.log("Array1",arry1)