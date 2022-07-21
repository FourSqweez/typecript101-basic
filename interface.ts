// Interface -> คือการตั้งชื่อให้กับ object type เพื่อให้เราสามารถเอา object type ตัวนั้นๆ ไปใช้งานซ้ำได้หลายๆครัง

// อย่างในเม้น คือ เราสร้าง userA, userB โดยมี type เป็น {} และข้างในเป็น {username: string; email: string} เหมือนกัน เราเลย เอา { } ตัวนี้ไปสร้าเป็น interface User และค่อยเรียกใช้เอีกที่ โดยการให้ userA, userB มี Type เป็น User

/** const userA: {username: string; email: string} = {
   username: 'Alan',
   email: 'alan@test.com'
}

const userB: {username: string; email: string} = {
   username: 'Boy',
   email: 'boy@test.com'
}
**/

interface User {
	username: string;
	email: string;
}

const userA: User = {
	username: 'Alan',
	email: 'alan@test.com',
};

const userB: User = {
	username: 'Boy',
	email: 'boy@test.com',
};

// สามารถ ขยาย หรือเพิ่ม property ใหม่ เข้าไปใน interface เดิมได้ โดยการสร้างซ้ำ โดย TS จะเอา ppt ไปรวมกับของเก่าให้เอง
// แต่แบบนี้ จะกระทบให้ตัวที่เรียกใช้ User ต้องเพิ่ม ppt ให้ครบ 4 ตัวตามด้วย ไม่งั้นจะ error
// interface User {
// 	password: string;
// 	age: number;
// }

// เลยแก้ด้วยการ สืบทอดมาใช้แทน
interface NewUser extends User {
	password: string;
	age: number;
}
// ตัวนี้ จะสามารถมี 4 ppt ได้ โดยที่จะไม่เพิ่ม สอง ppt ไปในตัว User แต่จะมาสร้างใหม่ที่ตัว NewUser โดยสืบทอด 2 ppt จาก User มา
const userC: NewUser = {
	username: 'Four',
	email: 'four@test.com',
	password: '',
	age: 20,
};
