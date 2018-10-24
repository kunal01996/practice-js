/**
 * Literals are used to represent values in JavaScript. These are the value sthat we provide to the script.
 */

 // Array Literals - an array literal is a list of zero or more expressions, each of which represents an array element.
 // The following lines create an array with 3 elements
 var coffee = ['french toast', 'colombian', 'Kona'];
 console.log(coffee)
 console.log(typeof coffee[0]);

//  If an array is created using a literal in a top-level script, 
// JavaScript interprets the array each time it evaluates the expression containing the array literal. 
// In addition, a literal used in a function is created each time the function is called.

// Array literals are also array objects

// Extra commas in array iterals
var extras = ['fish', , , , , 'Justified'];
console.log(extras);
