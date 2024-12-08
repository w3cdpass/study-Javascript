// object literal
/**
 * key => string
 * key => symbol 
 * e.g 
 * it change integer into string 
 */
// e.g
// const object = {
//     id: "gamer",
//     1: "pro",
//     54: 2
// };

// console.log(typeof object[54])
// for (let key in object) {
//     console.log(typeof key)
// }

// Maps

/**
 * key value pairs
 */
const person = new Map();

person.set('fstName', 'Gamer');
person.set('age', 7);
person.set("popppy" , { tiger: "Animal" }, 1 ,  "one");
// console.log(person)

// to access the key value

// console.log(person.get(1))
// console.log(person.values(1))

for (let [key , value] of person) {
    // console.log(Array.isArray(key))
    // console.log(key, value)
}

const person2 = {
    id: 1,
    firstName: "Aligator"
};

const person3 = {
    id: 2,
    firstName: "Crocodile"
};

const userInfo = new Map();

userInfo.set(person2, { hobby: "Hunting", gender: "Male" });

// const person2 = new Map([['first', "Aligator"], ["age", "89"]])


// console.log(person2.id);
console.log(userInfo.get(person2).gender)


// real e.g =>