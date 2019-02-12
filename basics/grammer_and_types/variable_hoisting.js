/**
 * variable hoisting - variables can be referenced even before they are declared without getting an exception
*/

/*Example 1:
Output: true
*/
console.log(x === undefined); //in this case print true. 
var x = 3;
/*Explination:
In the above example javascript read the code below metioned manner

var x;
console.log(x === undefined);
x = 3;

so the variable x declared not intialized that's why value x is undifined
*/

/*Example 2
Using two types of variables first global and second one local
Output: undefined
*/

var myvar = "my value"; // global scope variable

(function(){
    console.log(myvar);
    var myvar;          //local scope variable
    myvar = "local variable";
})();

/*Explination: In the example 2 javascript read the code below mwntioned manner
var myvar;
myvar = "my value";

(function(){
  var myvar;       in this case myvar declared but not intialize so that's why myvar in undifined also it's not accessing the global variable        because it's redeclaired in local scope.
  console.log(myvar);
  myvar = "local variable";

})();*/


//let (const) does not hoist the variable at the top.
console.log(y);
let y = 3;
