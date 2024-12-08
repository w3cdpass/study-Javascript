// import array methods

/**
 * For each
 * map
 * filter
 * reduce
 */

// for each

const numbers = [2, 3, 4, 5, 5, 6, 666, 4];
function split(num, index) {
    console.log(`Index is ${index} &  multiple is ${num * 2}`)
}

// ----------------------------

// numbers.forEach(split)


// ------------------------------

// define callback function in forEach()


// numbers.forEach(function (num, index) {
//     console.log(`Index is ${index} &  multiple is ${num * 2}`)
// })


// ---------------------------

// numbers.forEach()




// split(numbers[0], 0)
const OddEven = num => {
    for (let i = 0; i < num.length; i++) {
        return (`This ${num[i]} number is ${num[i] % 2 === 0 ? "even" : "odd"}, because remainder is ${num % 2}`)
    }
}


// Map Method
let array = [2,5]
const gill = arry => arry.forEach((num) => {
    // console.log(`${num % 2 ===0 ? "even" : "odd"}`)
    for (let i = 1; i <= 10; i++) {
        // console.log(num, num * i)
        document.write(`${num} x ${i} = ${num * i} </br>`)
    }
})
gill(array)
// numbers.forEach(split);
// const p = OddEven(numbers)
// console.log(OddEven(numbers))
// numbers.forEach(OddEven())

// real

const users = [
    { fstName: "fdfdf", age: 23 },
    { fstName: "pol", age: 23 },
    { fstName: "like", age: 23 },
    { fstName: "kjlo", age: 23 },
    { fstName: "mnv", age: 23 },
    { fstName: "qwe", age: 23 },
    { fstName: "asc", age: 23 },
    { fstName: "df", age: 23 }
]
// users.forEach(function(usr) {
//     console.log(usr.fstName)
// })

users.forEach((usr) => {
    console.log(usr.fstName)
})