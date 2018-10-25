/**
 * Regex literals are literals encolsed between two slashes
 */
var re = /ab+c/;
console.log(re, typeof re);

/**
 * String literals
 */

var s1 = 'foo';
var s2 = 'bar';
var s3 = "foo's bar";

 var str = new String(1);
 console.log(str, typeof str);

 // Basic literal string creation
var lineFeed = `In JavaScript '\n' is a line-feed.`
console.log(lineFeed);

// Multiline strings
var multiLine = `In JavaScript template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`;
 console.log(multiLine);

// String interpolation
var name = 'Bob', time = 'today';
console.log(`Hello ${name}, how are you ${time}?`);

// Escaping quotes and double quotes
var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);

// Escaping \ in strings
console.log("c:\\temp");

// We can use the backslash character to escape the line breaks
var lineBreak = 'This string is \
broken into \
several line';
console.log(lineBreak);

var poem = 
'Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.'
console.log(poem);

// With ECMAScript 2015 we can make use of template strings

var poem = 
`Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.`
console.log(poem);