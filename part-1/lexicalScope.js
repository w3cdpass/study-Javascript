// lexical Scope

// global scope 
/this is global scope var like = 'side'/
const myfunc = () => {
    const like = "side";
    function sectFunc() { 
        let like = "up"
        console.log("inside setFunc", like)
    };
    const myInseFun = function () { }
    const gitFun = gun => { }
    console.log(like)
    sectFunc()
}
myfunc()