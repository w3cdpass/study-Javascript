// practice of classs

// create animals thw pro name age
// metnod eat

class Animal{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // method
    HerbiAnimalMeal() { return `${this.name} only eats grass` };
    
    dangerousORnot() { return this.age >= 1; }
    isCute() { return true };
}

// const animal1 = new Animal("Cow", 23);
// console.log(animal1.HerbiAnimalMeal());
// console.log(animal1.dangerousORnot())



// make animals

// inheritance
// dog is subclass and animal is parent class;
class Dog extends Animal{

}

const Moti = new Animal("Shera", 34)
console.log(Moti.age)