const userInfo = {
    fstName: "Fridge",
    age: 5,
    about() {
        console.log(this.fstName, this.age)
    } 
};

userInfo.about()