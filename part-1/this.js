// this
// "use strict";

// function thisFunc() {
//     console.log(this)
// };

// thisFunc()

// function hello() {
//     console.log("hello world")
// };

/**
 * Call => {this method can do some amazing stuff 
 *  like when you want to  use a function without giving particalur call for function 
 *  you can use call Method e.g functionName.call(obj, parm1, parm2)
 *  you can use this also to use it.}
 * for example => fucntionName.call(obj, param1, param2);
 * 
 * apply => {similar to call method
 *  only diffrence is for passing param1, param2 
 *  you have include them in array ["param1" , "param2"]} 
 * for example => functionName.bind(obj, ["param1", "param2"]);
 * 
 * bind => {this can store your outcome in a function then later you can call it}
 * for example => const storeFunc = functionName.apply(obj, param1, param2)
 *  call it    =>   storeFunc()
 */

// hello.call()




// call Method
function bioData(hobby , favSong) {
        console.log(this.fstName, this.age, hobby, favSong);
    } 
const usr1 = {
    fstName: "Lion",
    age: 12,

};

// usr1.about()

const usr2 = {
    fstName: "Aligator",
    age: 45,
    // about: function () {
    //     console.log(this.fstName, this.age)
    // }
};

// usr1.about.call(usr1)
// usr1.about.call(usr1, "gaming", "gmm")
// usr1.about.call(); // output will undefined in console

bioData.call(usr1, "gaming", "yellow")



// apply method

bioData.apply(usr1,["fishing", "poppy"])



// bind method

const functionVar = bioData.bind(usr1, "Hunting", "queen");

functionVar()