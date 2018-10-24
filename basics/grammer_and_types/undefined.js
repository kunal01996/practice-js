/**
 * using undefined in conditionals
 */

 var input;

 if(input === undefined) {
     console.log('input is undefined.');
 }
 else {
     console.log('input isn\'t undefined.');
 }

 // undefined behaves as a false when used in boolean context
 var myArray = new Array();

 if(!myArray[0]) {
     console.log("zero index is undefined.");
 }
 else {
     console.log('zero index is defined');
 }

 // The undefined value converts to NaN when used with in a numeric context
 var a;
 console.log(a + 2);
 
 // When used null with in a numeric contex, it evaluates to 0.In boolean context it evaluates to false.
 var b = null;
 console.log(b*30);
