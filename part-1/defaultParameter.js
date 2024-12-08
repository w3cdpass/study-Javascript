// default Pararmeters

function sumOf(a, b) {
    if (typeof b === "undefined") { // old method before 2015 ES6
        b = 0;
    }
    return a + b;
}

// console.log(sumOf(3));
function newSumOf(a, b = 0) {
    return a + b;
}
console.log(newSumOf(2,))