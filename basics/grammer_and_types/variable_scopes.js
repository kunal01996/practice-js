/**
 * variable scopes in JavaScript.
 * 
 * When we declare a variable outside a function, it is a global variable, because it is available to any other code in the document.
 * When we declare a variable inside a function, it is called a local variable, because it is available only inside that function.
 * 
 * JavaScript before ECMAScript 2015 did not have block scope, but with let statement, now it has block scoping as well.
 */

 // The following code woould log 10 on the screen
 if(true) {
     var x = 10;
 }
 console.log(x);

 // This behavior changed with coming of let keyword
 if(true) {
     let y = 10;
 }
 console.log(y) // would return a ReferenceError
