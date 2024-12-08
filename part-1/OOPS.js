const usr = {
    fstName: "Nylin",
    lstName: "pinecone",
    email: "pine.me@nylin.com",
    age: 23,
    address: "Near pinecone tree",
    about() {
        return `${this.fstName} is ${this.age} years old and for mailling him on ${this.email}`;
    },
    is18() {
        return this.age >= 18;
    }
};

// usr.about()
// don't work tedious

// const bioData = usr.about();
// console.log(bioData)

// console.log(usr.is18())

// work simple

/**
 * function => that can create objects.
 * adding key values pair.
 * to use it we will return objects 
 */

const usrMethod = {
    about: function () { return `${this.fstName} ${this.age}` },
    is18: function () { return this.age >= 18 }
}

function createUsr(fstName, lstName, age, email, address) {
    const usr = {};
    usr.fstName = fstName;
    usr.lstName = lstName;
    usr.age = age;
    usr.email = email;
    usr.address = address;
    usr.about = usrMethod.about
    usr.is18 = usrMethod.is18
    return usr;
};


const usr1 = createUsr("gamer", "tiger", 19, "pine@mail.com", "mydd");
console.log(usr1)
console.log(usr1.is18())
console.log(usr1.about())
console.log(usr1.is18())