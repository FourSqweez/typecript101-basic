// Any คือการบอกว่า type จะเป็นอะไรก็ได้คล้าย ๆ ว่าเราใช้ JS ไม่ตรวจ type ตอน คอมไพล ไม่ตรวจไรเลย

let a: any;
a = 1;
a = 'test';
a = true;
a = [1, 2];
a = { a: 1, b: 2 };
// const b = a.toUpperCase() // error ตอนรัน
console.log('a: ', a);

// Unknown Type -> กำหนดอะไรก็ได้ แต่ถ้าไปเรียก method ที่ไม่มีใน type นั้น จะ error // ใช้แทน any ให้ได้มากสุด
let x: unknown;
x = 2;
x = 'b';
x = true;
x = ['a', 'b'];
x = { a: 2, b: 5 };
// const y = x.toUpperCase()  // error ทันที
console.log('x: ', x);





