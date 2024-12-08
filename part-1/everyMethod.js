// every method

const number = [2, 4,2,8];


// function isEven(num) {
//     return num % 2 === 0;
// }

// console.log(number.every(isEven))
// console.log(number.every((num) => num % 2 === 0 ));

// callback function => true/false (boolean)
// every method => true/false
// like when all number are even it will return true otherwise return false


// real example

let prodeuct = [
    { proID: 1, prce: 1293 },
    { proID: 2, prce: 454 },
    { proID: 3, prce: 129 },
    { proID: 4, prce: 2333 }
    
];

console.log(prodeuct.every((check) => {
    return check.prce < 2500
}))