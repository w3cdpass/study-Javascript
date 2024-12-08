/**  Use of Class and Constructor
 */

// code syntax :
/** 
    class FunctioName{
        constructor(parm1, parm2, parm3, parm3) {
            this.parm1 = parm1
        }

        method1() { code };
        method2() { code };
}*/



class CreateUsr{
    constructor(FstName, LstName, age, hobby) {
        this.FstName = FstName
        this.LstName = LstName
        this.age = age
        this.hobby = hobby
    }
    // methods can be added here ..
    about(yes) { if (yes === 1){ return `Hello my name is ${this.FstName}`} else{return `I am stranger.`} };
    is18() { return this.age >= 18 };

}


const usr1 = new CreateUsr("Ele", "phant", 25, "eating");

// console.log(usr1.about(1))
// console.log(Object.getPrototypeOf(usr1));