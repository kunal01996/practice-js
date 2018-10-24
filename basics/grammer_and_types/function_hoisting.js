/**
 * Function hoisting - only the function declaration gets hoisted to the top and not the function expression.
 */

 // function declaration
 foo(); // this would print 'bar' on the screen

 function foo(){
     console.log('bar');
 }

 // function expression
 baz(); // this would return TypeError. baz is not a function

 var baz = function() {
     console.log('bar2');
 }

