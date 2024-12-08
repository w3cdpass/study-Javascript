// rest parameters

// const sumOf = (a, b, ...c) => { a + b }
function sumOf(...c) {
    let total = 0;
    for (let num of c) {
        total = total +  num
    }
    return total;
}

console.log(sumOf(3,5,6,5))