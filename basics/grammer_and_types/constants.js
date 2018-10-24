/**
 * To define a block-level read only property. A constant cannot be changed or reassigned throughout the execution of the script.
 * A constant must be initialized to a value.
 * 
 * We cannot declare a constant with the same name as a function or a variable.
 */

 const a = 45;

 (function(){

    "use strict"
    console.log("The const a is: "+a);
    
    //modifying a, should cause an error
    // a = 65; // this would throw a SyntaxError.
    // console.log(a);


 })();


 if(true) {

    const b = 67;
    console.log("b is: "+b);

 }

 // console.log("b outside if is: "+b); // this would throw an error.

 //reassigning b
 b = 100;
 console.log("after reassignment b is: "+b);

 // However the properties of constant objects are not protected also the contents of an array are also not protected
 const obj = {"key":"value"};
 // modifying the value for the key
 obj.key = "other value"
 console.log(obj.key);
 // the property key of the object can also be deleted
 delete obj.key;
 console.log(obj) // this would print an empty object

 // creating arrays as constants
 const myArr = ['HTML', 'CSS', 'JAVASCRIPT'];
 console.log(myArr);
 myArr[0] = 'HTML5';
 console.log(myArr);
 myArr.push('LESS');
 console.log(myArr);
 
