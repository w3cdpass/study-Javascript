// Parameter Destructuring

// object
// react

const person = {
    firstName: "hilolp",
    gender : "male"
}

function printD({firstName, gender}) {
    console.log(firstName)
}

printD(person)