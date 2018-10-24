/**
 * Data types
 * There are seven data types as defined in the ECMAScript specifications.
 * 
 * Six Data types that are primitive
 * 1. Boolean true|false
 * 2. null, since JavaScript is case-sensitive null is not same as Null or nULL etc.
 * 3. undefined, a variable which is not yet defined
 * 4. number, eg. 42, 4.34
 * 5. string eg. "Name"
 * 6. Symbol - A data types whose instances are unique and immutable
 * 
 * 7. an Object
 * 
 * Objects are containers for values, functions are procedures that your application can perform.
 */


 /**
  * Data type conversions - JavaScript is dynamically typed language, so the following statements do not cause an error.
  */
 var answer = 42;
 console.log(`answer is ${answer}`);
 console.log(typeof answer);

 answer = "a dynamically typed language";
 console.log(answer);
 console.log(typeof answer);

 // number is converted to strinig as and when required
 x = 'The answer is '+42;
 console.log(x);
 console.log(typeof x);

 // when operator is other than +, numbers are not converted from numbers to strings
 console.log('val'/4);
 console.log('val'*4);
 console.log('37'+4);
 console.log('31'-1);

var myFunc = function() {
    return 0;
}
console.log(typeof myFunc); // this would return a function

var arr = [];
console.log(typeof arr); // this would return an object. Remember, var arr = new Array();

var myObj = {};
console.log(typeof myObj); // this would return an object.

// Converting strings to numbers
// methods of converting are as follows:
console.log(parseInt('37', 10)) // specifying radix as the second parameter. This is for specifying the base e.g. binary, decimal
console.log(parseFloat('3.123')) 
console.log(parseFloat('3'))

// An alternative way of retrieving a number froma string is  using +(unary) operator
console.log('1.1'  + '1.1') // '1.11.1'
console.log((+'1.1') + (+'1.1')) // 2.2 Note: () are for clarity not required although.

