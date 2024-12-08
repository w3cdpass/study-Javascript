// prototype with __proto__

/**
 *  __proto__ only create a chain between two methods where
 *  we can create our own function conditions and more 
 * it will work any where 
 * code syntax : { const varDeclare = Object.create(anyMethods) }
 * 
 *  Prototype is another thing it return a empty object where 
 *  we can create our own methods and function inside function 
 *  like it will work only in { function } nor to other methods of javascript
 * code syntax : 
 * { fuctionName.prototype } keyword will add instance of the function 
 * 
 *  __proto__ with Prototype
 *  code syntax : 
 *  { chainPrototype&__proto__ function(param1, parm2, parm3, parm4, parm5){
 *      const varDeclare = Object.create(chainPrototype&__prototype__.prototype)
 *  }
 * 
 * } // end of the syntax:
 * 
 */

// const usrMethod = {
//     about: function () { return `${this.fstName} ${this.age}` },
//     is18: function () { return this.age >= 18 }
// }    

function createUsr(fstName, lstName, age, email, address) {
    const usr = Object.create(createUsr.prototype); // give a empty object with __proto__ refrence
    // const usr = {};
    usr.fstName = fstName;
    usr.lstName = lstName;
    usr.age = age;
    usr.email = email;
    usr.address = address;
    return usr;
};



const usr1 = createUsr("gamer", "pro", 11, "gam@mail.to", "#12 st.nigga");
// console.log(usr1)

// const age = usr1.is18()
// console.log(age)
// console.log(createUsr.prototype)
createUsr.prototype.about = function () { return `${this.fstName} ${this.age}` };
createUsr.prototype.is18 = function () { return this.age >= 18 };

// console.log(createUsr.prototype.about())
console.log(usr1.is18())