// methods
/**
 * What are Methods ?
 * functiion inside object
 */



const person = {
    fstName: "Chameleon",
    age: 34,
    about: function () {
        // console.log(`Name is ${fstName} and age is ${age}.`) // wrong syntax.

        // correcty syntax 
        console.log(`Name is ${this.fstName} and age is ${this.age}`)

        // optional
        // console.log(`Name is ${person.fstName} and age is ${person.age}.`)
    }
};

// what is this ?
// this is object that inside function calling
// person.about()

// person.fstName

function bioData() {
    console.log(`Person Name is ${this.fstName} and age is ${this.age} and hobby is ${this.hobby}`)
}

const person90 = {
    fstName: "SnowLeopard",
    age: 43,
    hobby: "Sking",
    about: bioData
};

// const person90 = {
//     fstName: "SnowLeopard",
//     age: 43,
//     hobby: "Sking",
//     about: bioData
// };

// const person90 = {
//     fstName: "SnowLeopard",
//     age: 43,
//     hobby: "Sking",
//     about: bioData
// };

// const person90 = {
//     fstName: "SnowLeopard",
//     age: 43,
//     hobby: "Sking",
//     about: bioData
// };


// person90.about()

// wtf 
// console.log(this)