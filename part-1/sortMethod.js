// Sort Method

/*ASCII TABLE
char : asscii value
*/

// 


/**
 * '0':48
 * '1':49
 * '2':50
 * '3':51
 * '4':52
 * '5':53
 * '6':54
 * '7':55
 * '8':56
 * '9':57
*/

// javaScript will shows the array in asscii code and convert it into strings

// Array(7) [ 0, 2, 34, 54, 78, 87, 122 ] <= exected output

// js View
// => Array(7)[0, 2, 34, 54, 78, 87, 122]
// `"0", "2", "34", "54", "78", "87", "122"`
// `[48, 50,   51,   53,   55,   56,   48]` // in ASCII Char
// Array(7) [ 0, 122, 2, 34, 54, 78, 87 ]
// --------------------------------------

// const number = [34, -2, 122, 87, 54, 78, 0];
// console.log(number.sort())

// wierd output : Array(7) [ 0, 122, 2, 34, 54, 78, 87 ]

// console.log(number.sort((a,b)=>a - b))
// how above code works

// Positive number

// if a - b => negative number -> result will be a first then b second

// a = 2 , b = 34 => a - b = -32
// output will be a first then b second

// negative number

// suppose two positive number a , b
// a - b => positive (greater than 0)
//  a =2 , b = 122;
//  a - b => 120; -> result is positive

// output will be b first and a second



// second example

// price lowToHigh and highToLow
const products = [
    { proID: 1, produceName: "p1", price: 400 },
    { proID: 2, produceName: "p2", price: 500 },
    { proID: 3, produceName: "p4", price: 300 },
    { proID: 4, produceName: "p7", price: 4980 },
    { proID: 5, produceName: "p3", price: 760 },
    { proID: 6, produceName: "p9", price: 3450 },
]

let lowToHigh = products.sort((a, b) => { return a.price - b.price });
console.log(lowToHigh)

let highToLow = products.slice(0).sort((a, b) => { return b.price - a.price });

console.log(highToLow)