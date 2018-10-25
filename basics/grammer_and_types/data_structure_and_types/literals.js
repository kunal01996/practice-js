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

// Boolean Literals
// the boolean type has 2 literal values true and false

var bool1 = true;
var bool2 = false;

console.log(typeof bool1, typeof bool2);

// Numeric literals
// 1. without a leading zero denotes a decimal integer
// 2. with a leading zero or 0o or o0 denotes an octal number
// 3. with leading 0x denotes a hex
// 4. with a leading 0b denotes a binary

console.log(10, typeof 10);
console.log(0o23, typeof 0o23);
console.log(0x2A, typeof 0x2A);
console.log(0b1010, typeof 0b1010);

// Floating literal
// 1. A decimal integer which can be signed
console.log(+21, typeof +21);
// 2. A decimal point
console.log(12.21, typeof .21);
// 3. A fraction
console.log(-.12, typeof -.12);
// 4. An exponent
console.log(2e3, typeof 2e3);

