"use strict";
exports.__esModule = true;
// Any
var a;
// a = 1
// a = 'a'
// a = true
// a = [1, 2]
// a = { a: 1, b: 2 }
// console.log('a', a)
// Unknown
var x;
x = 'a';
if (typeof x === 'string') {
    var y = x.toUpperCase();
    console.log('y: ', y);
}
// x = 'b'
// x = false
// x = ['a','b']
// x = {a: 5, b:7}
console.log('x: ', x);
