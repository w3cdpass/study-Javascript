/** Get Multiple elements using 
 *  getELementById by class name
 *  get elements items by querySelectorAll
 */

// when you are using getelementbyclassname don't put dot .  with string only className 
const navItemsGebCn = document.getElementsByClassName("form-g"); //give me html collection 
// console.log(navItems[3])


// querySelector
const navItemsQsA = document.querySelectorAll(".sifor label"); // give me nodeList
console.log(navItemsQsA) //array like object ==> indexing, length .
// navItemsGebCn.style.color = "red"

// note : we can't use forEach method to iterate through HTMLCollection
/**
 *  simple for loop
 *   for of loop
 */

// for (let i = 0; i < navItemsQsA.length; i++){
//     // console.log(navItemsQsA[i])
//     const nav = navItemsQsA[i];
//     nav.style.color = "white";
//     nav.style.fontSize = "18px";
// }

// for (let label of navItemsQsA) {
//     // console.log(label)
//     const la = label
//     la.style.color = "red"
// }

navItemsQsA.forEach((nav) => {
    // console.log(nav)
    const g = nav;
    g.style.color = "white";
})