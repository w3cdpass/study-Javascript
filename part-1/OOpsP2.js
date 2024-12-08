// better good

// __proto__ chaning

// for instance

const obj1 = {
    key1: "valu1",
    key2: "valu2"
};
const obj2 = {
    key3: "valu3",
    key4: "value4"
};


// simple way to create Object
// const obj3 = {};
// one more way 
const obj3 = Object.create(obj1);

obj3.key5 = "value5";
// obj3.key5 = "unique" //same as it is

// console.log(obj3.key2) // it checks first own Object name then above







// now you can create many own methods in it

const usrMethod = {
    about: function () { return `${this.fstName} ${this.age}` },
    is18: function () { return this.age >= 18 }
}    

function createUsr(fstName, lstName, age, email, address) {
    const usr = Object.create(usrMethod); // give a empty object with __proto__ refrence
    usr.fstName = fstName;
    usr.lstName = lstName;
    usr.age = age;
    usr.email = email;
    usr.address = address;
    return usr;
};    



const usr1 = createUsr("gamer", "pro", 21, "gam@mail.to", "#12 st.nigga");
console.log(usr1)

const age = usr1.is18()
console.log(age)




// console.log(obj3.__proto__) // return obj3 prototype refrence above
// how it happening


// __proto__
// official ecmascript documentation

// [[prototype]]
// __proto__, [[prototype]]

// prototype