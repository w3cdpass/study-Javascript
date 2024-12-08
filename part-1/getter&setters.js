// getter and setters

class Person{
    constructor(fstName, lstName, age) {
        this.fstName = fstName
        this.lstName = lstName
        this.age = age
    }
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

const person1 = new Person("tika", "ram", 34);
// console.log(person1.fullName())
// console.log(person1.fullName)

// using setter

// person1.fstName = "Lion";
// person1.lstName = "king";


// person1.setName("Lion", "King");

// i want functionality like that 
person1.fullName = "Gamer Ligma"
console.log(person1.fullName)