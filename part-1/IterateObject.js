// how to iterate object

const animal = {
    name: "Lion",
    age: 15,
    hobbies: ["Hunting","playing" ]

}
// for in loop
// objects.keys

// using for in loop
// for (let key in animal) {
//     console.log(`${key}:${animal[key]}`)
// }


// using Object.keys

// console.log(Object.values(animal))

for (let key of Object.keys(animal)) {
    console.log(key)
}