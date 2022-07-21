// Tuple -> array of fixed length, different and know types, order of the elements does matters
let client: [string, number, boolean];
client = ['Somsak', 35, true]; // ข้อมูลต้องตรงคาม type ที่กำหนดไว้แต่แรก
// client = [35, 'Somsak', true] // error -> ต้องเรียงข้อมูลตาม type ตรงตามตำแหน่ง
// client = [35, 'Somsak', true,5, 'Somsak', true] // error -> // ควาวยาวเท่ากับสามเท่านั้น
console.log(client[0]);
console.log(client[1]);
console.log(client[2]);
// console.log(client[3]) error -> Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.
// Array
let client1: (string | number | boolean)[];
client1 = ['Somsak', 35, true];
client1 = [35, 'Somsak', true]; // ลำดับการเรียงไม่สำคัญ
client1 = [35, 'Somsak', true, 5, 'Somsak', true]; // ความยาวไม่สำคัญ
// client1 = [35, 'Somsak', {'test'}]; error type ต้องเป็นหนึ่งในสามตัวที่กำหนดไว้เท่านั้น

console.log(client1);
