/**
 * Object literals
 * - object literal is a list of zero of more pairs of property names and associated values of an object
 */

 var sales = 'Toyota';

 function carTypes(name) {

     if(name == 'Honda') return name;
     return "Sorry we do not sell "+name+"!";

 }

 var car = {myCar: 'Saturn', getCar: carTypes("Honda"), special: sales};

 console.log(car.myCar);
 console.log(car.getCar);
 console.log(car.special);

 /**
  * Additionally, numeric keys and string literals can also be used as keys. Also keys which are not valid identifiers can be
  * added as keys by putting them in double quotes.
  */
 var yourCar = {1: "Jeep", "car": {2: "Mazda"}, 5:"Omni"};

 console.log(yourCar);

 // and yes even folating point numbers can be used as keys, but they can be used to access the values only by following the double quotes standard.

 var unusualPropertyNames = {
    '': 'An empty string',
    '!': 'Bang!'
  }
//   console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
  console.log(unusualPropertyNames['']);  // An empty string
//   console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
  console.log(unusualPropertyNames['!']); // Bang!
  