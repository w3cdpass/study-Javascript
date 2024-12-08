// some method

const numbr = [23, 2, 34, 234, 68];

// it will return true and false
// kya ek bhi number esa hai jo even hai
// when we making some condition
// for e.g

// console.log(numbr.some((nu) => nu % 2 === 0));
let prodeuct = [
    { proID: 1, prce: 1293 },
    { proID: 2, prce: 454 },
    { proID: 3, prce: 129 },
    { proID: 4, prce: 2333 }
    
];

// console.log(prodeuct.some((num) => num % 2 === 0));

const products = [
    { proID: 1, produceName: "p1", price: 400 },
    { proID: 2, produceName: "p2", price: 500 },
    { proID: 3, produceName: "p4", price: 300 },
    { proID: 4, produceName: "p7", price: 4980 },
    { proID: 5, produceName: "p3", price: 760 },
    { proID: 6, produceName: "p9", price: 3450 },
]


console.log(products.some((max) => max.price > 1200))