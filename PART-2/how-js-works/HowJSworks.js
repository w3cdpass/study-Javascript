// complition
// code execution
// why compilation

// how javascript code executes

// what is global execution context ?
// what is local execution context ?
// closures

/** Compilation Phase 
 *  tokenizing/lexing ==> it will create chunks of our code 
 *  Parsing ==> then using those chunks Abstract  syntax tree
 *  code genration
 *  AST ==> then code genration will do 
 */

// Ecma docs
/**
 *  Early error checking
 *  determing appropreiate scope for variables 
 */

/** Conclusion
 * 
 * 
 */

// Early error Checking

console.log(this);
console.log(window);
console.log(fstName)
var fstName = "Lion king";
console.log(fstName)

// Determing appropreiate scope for variables

/**
 *  Global Scope firstName
 */


/** Code execution
 * 
 * 
 */

/** 1.) Compilation Phase
 *   [=> Early Error Checking.
 *   [=> Determining appropriate scope for vaiables.    
 * 
 * 2.) Code Ececution Phase
 *  [=> In J.S code executes inside execution context
 */

// qs.) What is Global execution context ?

// ans1.)
/** There are two phase will execute of global var 
 *  1.) Creation phase  or { Glabal Memory }
 *  Window : {all things} 
 *  var fstName = "gamer" //output => undefined
 *  
 *  when GEC does it will create this keyword and , 
 *  this === window{object provided by browser} // output will vary with diff env 
 *  
 *   Those all above things are aviable by creation phase of Global Execution Context 
 */

// ans2.)
// Jacascript is synchronous programing language 
    /** 
     *  means it will execute line by line
     *  it is also a { single thread }
     */  // example given below of Code Execution  

/**  in console
 *  console.log(this) ==> window object {}
 *  console.log(window) == window{}
 *  console.log(fstName) ==> undefined
 *  var fstName = "lion King"; ==> says  replace undefined in console.log(fstName) with value inside in fstName
 */ 