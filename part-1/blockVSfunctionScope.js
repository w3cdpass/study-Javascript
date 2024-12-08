/**
 *      Block scope VS Function scope
 * ----------------------------------
 * let and const are block scope
 * ----------------------------------
 * var is function scope
 */

// this is Block scope using let const
{
    let firChar = "tigerpolkynesis"
    const ikoply = "Nature"
}

// console.log(ikoply)


//--------------------------------
//  

function myApp() {
    if (true) {
        var firstName = "lipo";
        console.log(firstName)
    }
    console.log(firstName)
}
myApp()