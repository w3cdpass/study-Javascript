console.log(this);
console.log(window);
console.log(myfunction);
console.log(fullName);

function fullName() {
    console.log("this is my function with fullName.")
};

var fstName = "Harshit";
var lstName = "Sharma";
var fullName = fstName + " " + lstName;
console.log(fullName)

/** how global execution creation works ?
 *   creates with two phases
 */
