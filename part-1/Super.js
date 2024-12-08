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

class Dog extends Animal{
    // super class
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed
    }
    // you can eat modify your Base Methods i.e
    HerbiAnimalMeal() {
        return `Modified Eat`
    }
    run() {
        return `${this.name} is runnning at ${this.speed}kmh`
    }
    
}

// objects also know as Instance 
const Shera = new Dog("Shera", 2, 34);
console.log(Shera.HerbiAnimalMeal())