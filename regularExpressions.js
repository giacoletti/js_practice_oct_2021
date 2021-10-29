let myRegex = new RegExp('abc');

console.log(typeof (myRegex));
console.log(myRegex);

let literalRegex = /abc/;

console.log(typeof (literalRegex));
console.log(literalRegex);

let regex = /hello/i;  //'i' flag to make the pattern case insensitive

let str = 'Hello world';
let result = regex.test(str); //returns true if the pattern match, otherwise returns false

console.log(result);

result = regex.exec(str);

console.log(result);  //[ 'Hello', index: 0, input: 'Hello world', groups: undefined ]


regex = /world/;

result = regex.exec(str);

console.log(result); //[ 'world', index: 6, input: 'Hello world', groups: undefined ]

regex = /polo/;

console.log(regex.test('marco polo'));

let regexGlobal = /abc/g;  //'g' flag finds all the matches, it doesn't stop at the first match

console.log(regexGlobal.test('abc abc'));

//Example of using the 'g' flag:

const p = 'I bought a dog the other day. He never ceases to amaze me. I love the dog. The dog is amazing.';

regex = /Dog/ig;  //with 'g' flag
console.log(p.replace(regex, 'ferret')); //I bought a ferret the other day. He never ceases to amaze me. I love the ferret. The ferret is amazing.

regex = /Dog/i;  //without 'g' flag
console.log(p.replace(regex, 'ferret')); //I bought a ferret the other day. He never ceases to amaze me. I love the dog. The dog is amazing.

//Using the Regular Expression Constructor:
// regex = new RegExp(/Dog/ig);   //2 ways of passing the arguments to the constructor
regex = new RegExp('Dog', 'ig');
console.log(p.replace(regex, 'wolf'));

regex = /[bt]ear/;  // matching character sets

console.log(regex.test('tear'));  // true

console.log(regex.test('bear')); // true

console.log(regex.test('fear')); // false

regex = /[^bt]ear/; // negated characted sets, it matches when does not contain the set

console.log(regex.test('tear')); // false

console.log(regex.test('bear')); // false

console.log(regex.test('fear')); // true

regex = /[a-z]ear/; // using ranges to match all the letters of an alphabet in a single position

console.log('Regex ranges testing: ', regex.test('fear')); // true
console.log(regex.test('zear')); // true

regex = /go+d/;  //must contain at least 1 'o' to get a match

console.log('Regex quantifier +: ',regex.test('gd'));  // false

regex = /go*d/;  //can contain 'o' or not, it will match

console.log('Regex quantifier *: ',regex.test('gd')); // true
console.log('Regex quantifier *: ',regex.test('dd')); // false

regex = /go{2}d/;  //to match the word must contain "g" and exactly 2 'o', and 'd' in sequence

console.log('Regex quantifier {2}: ', regex.test('good')); // true

console.log('Regex quantifier {2}: ',regex.test('goood')); // false

console.log('Regex quantifier {2}: ',regex.test('dooog')); // false

regex = /goo?d/;  //it matches if the characted before ? (the 'o') is present 1 time or not present

console.log('Regex quantifier ?: ', regex.test('gd'));  // false
console.log('Regex quantifier ?: ', regex.test('god'));  // true
console.log('Regex quantifier ?: ', regex.test('good'));  // true
console.log('Regex quantifier ?: ', regex.test('goood'));  // false

regex = /^g/;   //matches if the string starts with the 'g' character

console.log('Regex assertion ^:', regex.test('good'));   // true
console.log(regex.test('bad good'));  // false
console.log(regex.test('tag'));   // false

regex = /.com$/;  //matches if the string ends with '.com' (and no spaces)

console.log('Regex assertion $: ', regex.test('test@testmail.com')); // true
console.log(regex.test('test@testmail.it'));  // false
console.log(regex.test('test@testmail.com '));  // false

regex = /go{2,}d/;  //matches if the string has at least 2 'o' between a 'g' and a 'd'

console.log('Regex quantifier {2,}: ', regex.test('od'));  // false
console.log('Regex quantifier {2,}: ', regex.test('gd'));  // false
console.log('Regex quantifier {2,}: ', regex.test('god'));  // false
console.log('Regex quantifier {2,}: ', regex.test('good'));  // true
console.log('Regex quantifier {2,}: ', regex.test('goood'));  // true

regex = /go{1,2}d/; //matches if the string between 1 and 2 'o'

console.log('Regex quantifier {1,2}: ', regex.test('gd'));  // false
console.log('Regex quantifier {1,2}: ', regex.test('god'));  // true
console.log('Regex quantifier {1,2}: ', regex.test('good'));  // true
console.log('Regex quantifier {1,2}: ', regex.test('goood'));  // false

regex = /(green|red) apple/;  //matches if the string contains either "green" or "red" apple (1 space)

console.log('Regex group (green|red): ', regex.test('green apple')); // true
console.log('Regex group (green|red): ', regex.test('red apple'));  // true
console.log('Regex group (green|red): ', regex.test('red  apple'));  // false
console.log('Regex group (green|red): ', regex.test('blue apple'));  // false

regex = /a\+b/;  //to match literally special characters, you need \

console.log('Regex special character: ', regex.test('a+b'));  // true

regex = /(foo)bar\1/;  //  (foo) stores the word and \1 is basically like writing "foo" again

console.log('Regex capturing group (foo)bar\\1: ', regex.test('foobarfoo')); // true
console.log('Regex capturing group (foo)bar\\1: ', regex.test('foobar')); // false

regex = /(?:foo)bar\1/; // non capturing group, (?:foo) doesn't memorize the word "foo", so \1 won't work, it matches literal \1

console.log('Regex non capturing group (?:foo)bar\\1: ', regex.test('foobarfoo')); // false
console.log('Regex non capturing group (?:foo)bar\\1: ', regex.test('foobar')); // false
console.log('Regex non capturing group (?:foo)bar\\1: ', regex.test('foobar\1')); // true

regex = /Red(?=Apple)/;  // it matches if in the string "Red" is immediately followed by "Apple"

console.log('Regex assertion Red(?=Apple): ', regex.test('RedApple')); // true
console.log('Regex assertion Red(?=Apple): ', regex.test('Red Apple')); // false
