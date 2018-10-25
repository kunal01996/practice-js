/**
 * ECMAScript 2015 added prototype setting at construction of objects, shorthand for foo:foo assignments,
 * definig methods, making super calls and computing property names.
 */

 var obj = {

    // __proto__
    __proto__: theProtoObj,

    // shorthand for 'hadler:handler'
    handler,

    toString() {
        // Super calls
        return 'd ' + super.toString();
    },

    // computed (dynamic) property
    ['prop_' + (() => 42)()] : 42

 };

 console.log(obj);
 