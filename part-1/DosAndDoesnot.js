const userInfo = {
    fstName: "Fridge",
    age: 5,
    about: function() {
        console.log(this.fstName, this.age)
    } 
};

// don't do this mistake

// don't
const callMe = userInfo.about;
// callMe()

// does 
const rightCall = userInfo.about.bind(userInfo)
// rightCall()