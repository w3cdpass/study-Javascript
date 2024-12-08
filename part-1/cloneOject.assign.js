// clone using object.assign


// memory

const obj = {
    key1: "valu1",
    key2: "value2"
};

const obj2 = {

}
const obj4 = {...obj};

// const obj4 = Object.assign({}, ...obj);


obj.key3 = "value3";

console.log(obj)
console.log(obj4);