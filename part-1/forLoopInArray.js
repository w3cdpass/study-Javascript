// for loop in array

let arry2 = ["Javascript", "is Good", "but", "refrence Data types is confusing", "for me."];
// console.log(arry2.slice(1,3))
// for (let i = 0; i <= 9; i++){
//     console.log(i)
// }

newArry = [];
for (let i = 0; i <= arry2.length - 1; i++){
    // conscar = 
    newArry.push(arry2[i].toUpperCase())
}
console.log(newArry)