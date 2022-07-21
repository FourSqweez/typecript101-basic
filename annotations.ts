
// ทั้งหมดนี้คือการ annotate

export {};
let num: number;
num = 5;

let greet1: string = 'Hi';

const greet2: string = 'Hello';
let isEqual1: boolean = true;
const isEqual2: boolean = false;

const numbers: number[] = [5, 6, 7];

//Array
const names: Array<string> = ['tim', 'tom', 'jane'];

//Object
const user: {
  // ? => มีก็ได้หรือไม่มีก็ได้
	name?: string;
	email: string;
	password: string;
	age: number;
	gender: 'Male' | 'Female';
} = {
	name: 'time',
	email: 'tim@test.com',
	password: '1234',
	age: 15,
	gender: 'Male',
};

// เขียนแบบ annotate แต่จริงๆควรให้ typescript มัน infer เอง เหมือนในไฟล์ reference.ts จะสั้นลง
const sum: (a: number, b: number) => number = (
	x: number, // ลองให้ดูว่าชื่อไม่เหมือนกันได้ แต่ type ต้องเหมือนกัน แต่ปกติก็ไม่ทำแบบนี้
	y: number
): number => {
	return x + y;
};
