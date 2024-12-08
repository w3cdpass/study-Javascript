// reduce method

let rArry = [1,2,3,4,5,6];

// aim : sum of all numbers in array

rArry.reduce((accumulator, currentValue) => { return accumulator + currentValue; })

// accumulator + currentValue, => return
// 1        +          2        =>   3
// 3        +          3        =>   6
// 6        +          4        =>   10
// 10       +          6        =>   15
// 15       +          7        =>   25
// 20       +          8        =>   28
// -------------------------------------

const userCart = [
    { productID: 1, pName: "mobile", price: 12000 },
    { productID: 1, pName: "mobile", price: 12000 },
    { productID: 1, pName: "mobile", price: 20343 },
    { productID: 1, pName: "mobile", price: 12000 },
    { productID: 1, pName: "mobile", price: 12000 },
    { productID: 1, pName: "mobile", price: 12000 }
]

const g = userCart.reduce((totalPrice, currentProduce) => {
    return totalPrice + currentProduce.price
},0);
// console.log(g)

// total price + currentValue => return
// ------------------------------------
// initialValue  + Object{} => value
// 0 + objectVar.value => will return added value
// ----------------------------
//  0 + 12000 => 12000
// 12000 + 12000 => 24000
// 24000 + 12000 => 36000
