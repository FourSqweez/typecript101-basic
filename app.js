//* Dynamic type vs Static type
var str;
str = 10;
console.log(typeof str);
var sum = function (a, b) {
    return a + b;
};
var total = sum(5, 10);
console.log(total);
//* 1. string --> 'hello', "5", `true`
//* 2. number --> 10, 8.75
//* 3. boolean --> true / false
