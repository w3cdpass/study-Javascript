// filter method

// return true / false ------0---and---1------

const arry = [1, 4, 3, 5, 54, 3];



const deci = arr => arr.filter((arr2) => {
    return arr2 % 2 === 0;
})

// function jkl(ar) {
//     ar.filter((arr2) => {
//         return arr2 % 2 === 0;
//     })
// };




console.log(deci(arry))

let f = [2, 3, 4, 9, 4];

const d = f => f.filter((mbn) => {
    return mbn % 2 === 0;
})

console.log(d(f))