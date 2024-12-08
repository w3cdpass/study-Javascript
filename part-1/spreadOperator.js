// Spread Operator

// in array

const array1 = [1, 2, 3]

const array2 = [1, 2, 3]

// const spreadOp = [...array1, array2, 909 , 888]
// console.log(spareadOp)

const newSpread = [..."1234567788"]
// console.log(newSpread)


// in Objefcts

const obj1 = {
    key1: "value1",
    key2: "value2"
};


const obj2 = {
    key1: "tiger",
    key2: "value2"
};

const spreadOnject = { ...obj1, ...obj2, key12: "lion" }
console.log(spreadOnject)