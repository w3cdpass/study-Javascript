// static methods and properties

class Person{
    constructor(fstName, lstName, age) {
        this.fstName = fstName
        this.lstName = lstName
        this.age = age
    }
    static classInfo() {
        return `this is static class`
    }

    static dsProperties = "hello brother with static propeties";

    get fullName() { // this is method 
        return `${this.fstName} ${this.age}`;
    }
    set fullName(fullName) {
        // split this
        const [fstName, lstName] = fullName.split(" "); //array destructing with spliting
        // [Gamer, Ligma]
        this.fstName = fstName
        this.lstName = lstName
    }
}

const person1 = new Person("thiger", "ligma", 32);

// when you call it

/**
 *  using static you can call method by { className } 
 *  not by object 
 */
// Object methods calling // it will throw error this is not a function
// person1.classInfo();

// it works fine
console.log(Person.classInfo())
// with properties
console.log(Person.dsProperties)