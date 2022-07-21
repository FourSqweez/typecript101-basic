// Enum (Enumerated type.)

// enum คือ กลุ่มของค่าคงที่ที่มีความเกี่ยวเนื่องกันเราเลยเอามาสร้างเป็นกลุ่ม
// จะใช้ enum เมื่อไหร่ -> จะใช้เมื่อเรารู้ค่ามันก่อนล่วงหน้า เช่น ชื่อเดือน ชือ่วัน

// enum Role {
// 	CLIENT,
// 	EDITOR=5,
// 	ADMIN=3,
// 	SUPER_ADMIN,
// }

// console.log(Role)
// console.log(Role.CLIENT)
// console.log(Role[4])

// Enum (Enumerated type.)
enum Role {
	CLIENT = 'CLIENT',
	EDITOR = 'EDITOR',
	ADMIN = 'ADMIN',
	SUPER_ADMIN = 'SUPER_ADMIN',
}

console.log(Role);
console.log(Role.CLIENT);
console.log(Role.SUPER_ADMIN);

const role: Role = Role.EDITOR;
