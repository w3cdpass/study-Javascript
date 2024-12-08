// nextElementSibling

const rootElement = document.getRootNode();

const htmlElementNode = rootElement.childNodes[0];

const headElementNode = htmlElementNode.childNodes[0];

const bodyParent = htmlElementNode.childNodes[2];

// bodyParent.childNodes[1].style.color= "green"

// simple way select the element of html tag
// then change them

const h1 = document.querySelector("h1");
const div = h1.parentNode.parentNode
// div.style.color = "red"
// div.style.backgroundColor = "red"

// const bPra = document.getElementsByClassName("container")

// const body = bPra.parentNode.parentNode


// if u want to select body

const body1 = document.body;