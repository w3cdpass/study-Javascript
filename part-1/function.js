// funciton in js

// function singSong() {
//     console.log("tiger is sweet and also dangerous")
// }

// function somOf(a, b) {
//     return a + b;
// }

// function findOddEven(num) {
//     if (num % 2 === 0) {
//         console.log("even")
//     } else {
//         console.log("odd")
//     }
// }

// input : string // output : fristChar

// let ioStr = "tiger";

// function Zindex(inex) {
//     return (inex[0])
// }

// console.log(Zindex(ioStr));

// input : array, target (number)
// output : index of the target if target present in array

function findtarget(arry, tar) {
    for (let i = 0; i < arry.length; i++){
        if (arry[i] === tar) {
            return i;
        }
    }
    return -1;
}

const myArry = [1, 2, 34, 5, 6]

console.log(findtarget(myArry, 1))