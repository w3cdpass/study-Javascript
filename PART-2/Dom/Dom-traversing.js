/** Document js object 
 *  this also know as Root node
 *  html is node element { child node of document }
 * 
*/

// property nextElementSibling



const rootNode = document.getRootNode(); // by using this you can traverse every where in the tree of document 
const htmlElementNode = rootNode.childNodes[0]


// console.log(htmlElementNode.childNodes) //NodeList(3) [ head, #text, body ]

const headElementNode = htmlElementNode.childNodes[0];
const textElementNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(bodyElementNode);
// bodyElementNode.style.color = "red";

// console.log(headElementNode.parentNode);

// sibling relationShip

console.log(headElementNode.nextSibling)