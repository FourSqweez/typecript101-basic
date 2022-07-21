// Union type -> สามารถใช้ type มากกว่า หนึ่ง type ในการกำหนดให้กับตัวแปร

let answer: string | number;
answer = 'x';
answer = 5;
// answer= [4] error

let mixedArray: (string | number)[] = [];
mixedArray.push('x');
mixedArray.push(5);
// mixedArray.push(true); error

let myObject:
	| { a: number; b: number }
	| { a: string; b: string }
	| { a: string; b: number };
myObject = { a: 5, b: 6 };
myObject = { a: 'x', b: 'y' };
myObject = { a: 'y', b: 10 };

console.log(myObject);
