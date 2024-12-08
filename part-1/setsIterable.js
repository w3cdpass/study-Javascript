// sets (it is iterable)

/**
 * Store data
 * sets also have it's own methods
 * No index-based access
 * Order is not guaranteed
 * unique items only (no duplicates allowed)
 */

const fillArry = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// sets how it build
let number = new Set([1, 2, 3,3, 4, 5, 6, 7, 8, 9]);
// console.log(number)




let time = new Set();
// sets are not duplicated

// can you add new arry in sets
// but there is a trick that can add duplicate value 
const arry = ["item", "item2", "item3", "item4"];

// to NO 
time.add(1);
time.add(3);
time.add(6);
time.add(5);
time.add(31);
time.add(45);
time.add(90);
time.add(86);
time.add(arry)
// time.add(["item", "item2", "item3", "item4"]); // it will locate to seprate memory
// time.add(["item", "item2", "item3", "item4"]); // it will also
// however both values


// console.log(time)

// important note
// how to check element or particular value in array not in arry in arry

// console.log(time.has(90) ? "present" : "absent")



// console.log(time.has(["item"]) ? "present":"absent")

// for (val of time) {
//     console.log(val)
// }

// users when value is unique

const oldArry = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
let newArry = new Set(oldArry);
console.log(newArry)
let len = 0;

for (let el of newArry) {
    len++
}
console.log(len)