/**
 * variable hoisting - variables can be referenced even before they are declared without getting an exception
 */
console.log(x === undefined);
var x = 3;

var myvar = "my value";

(function(){
    console.log(myvar);
    var myvar;
    myvar = "local variable";
})();

// let (const) does not hoist the variable at the top.
console.log(y);
let y = 3;
