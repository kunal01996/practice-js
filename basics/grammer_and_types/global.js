/**
 * Global variables are in fact properties of the global object. In web pages, the global object is window.
 * Any property defined on window object becomes global
 */

 window.myVar = 23;

 (function(){

    "use strict"

    console.log(`mvar is : ${myVar}`);
    myVar = 34;
    console.log(`myvar after modification : ${myVar}`);

 })();
 