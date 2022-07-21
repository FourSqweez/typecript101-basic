// Function type
// ? -> optional ไม่จำเป็นต้องใส่ก็ได้
function addNums(a: number, b: number, c?: number): number {
	return c ? a + b + c : a + b;
}

console.log(addNums(5, 10));

function showAddNums(a: number, b: number): void {
	// return  a+b -> error Type 'number' is not assignable to type 'void'.
	console.log(a + b); // void not return
}
//default value parameter
function addNums2(a: number, b: number = 10): number {
	return a + b;
}
console.log(addNums2(5));

//rest parameter
function sumNums(...nums: number[]): number {
	return nums.reduce((sum, num) => sum + num, 0);
}
console.log(sumNums(2, 5, 10, 20)); // จะใส่ argument กี่ตัวก็ได้ หรือไม่ใส่ก็ได้

// Arrow function
// ไม่ต้องเขียน return type ก็ได้ TS จะ infer เอง ตอนเอาเมาส์ไปจี้ดูก็จะรู้ แต่จริงๆ ควรกำหนด เพื่อให้มันตรวจสอบว่า type ที่ return มาจริง ๆ มันถูกต้องไหม
// อันนี้มันเห็นชัดอยู่แล้ว ว่าเรา return number แต่ถ้าเราไม่รู้ล่ะ ก็ควรกำหนด type ที่เราต้องการให้ return พอมันไม่ตรงจะได้ error 
const addNums3 = (a: number, b: number = 10) => {
	return a + b;
};
console.log(addNums3(10, 20));
