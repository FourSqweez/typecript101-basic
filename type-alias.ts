// Type alias -> คือการตั้งชื่อใหม่ให้กับ type ที่เรามีอยู่ เช่น

type MyString = string; //ได้ชื่อ type ใหม่เป็น MyString ที่มี type เป็น string //แต่ไม่นิยมใช้กับ primitive type

type Role2 = 'CLIENT' | 'ADMIN' | 'SUPER_ADMIN'; // ตั้งชื่อให้กับ unionType และเอาชื่อ Role2 ไปใช้เป็น Type

type Employee = {
	username: string;
	email: string;
}; // ตั้งชื่อให้กับ objectType ด้วย Employee
// ตัวนี้ จะไปเหมือนกับการสร้าง interface ต่างกันที่ interface จะใช้สร้างได้แค่กับ objectType แต่ alias จะสร้างชื่อให้ได้ทุก type 
// ใช้แทนกันได้เลย
// แต่ interface สามารถ ขยาย(สร้างซ้ำ) หรือสืบทอด ไปใช้ซ้ำอีกได้ alias ทำได้แค่สืบทอดแบบนี้

type NewEmployee = Employee & {password: string} // ทีนี้ก็จะได้ NewEmployee ที่ มี 3 ppt
// ไม่ได้มีกฎตายตัวแล้วแต่อยากใช้ตัวไหน แต่ส่วนใหญ่ interface จะถูกใช้ในการตั้งชื่อ type สำหรับ props ใน react ส่วนใน Nodejs ส่วนใหญ่จะใช้ alias
