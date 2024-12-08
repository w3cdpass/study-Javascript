// function returing function

function oplil() {
    return function hello() {
        return "hello Animals";
    }
}
const gile = oplil()
console.log(gile())
// console.log(oplil())
