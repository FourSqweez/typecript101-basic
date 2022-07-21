// Object Type

let user: object
user = {name: 'Tim', email: 'tim@test.com', age: 36}
user = {username: 'Jim'}// re assignable
// user = [1,2] // ไม่นิยมใช้
// user = null -> Type 'null' is not assignable to type 'object'
// user = undefined -> Type 'undefined' is not assignable to type 'object'
console.log(user)

let user1: { name: string; email: string; age: number }; // ฟิกให้ค่าที่ใส่ต้องเป็น type ตามนี้
user1 = {name: 'Tim', email: 'tim@test.com', age: 36}
// user = {username: 'Jim'} ->error The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
// user = {name: 'test'} -> error Type '{ name: string; }' is missing the following properties from type '{ name: string; email: string; age: number; }': email, age // ก็คือต้องใส่ให้ครบทุกตัวในออปเจ็ค

let user2 = {name: 'Tim', email: 'tim@test.com', age: 36} // typescript infer เอง ดีที่สุด *** ใช้บ่อย

let user3: Object // จะใส่อะไรก็ได้ แต่ไม่ค่อยได้ใช้
let user4:{} // จะใส่อะไรก็ได้ แต่ไม่ค่อยได้ใช้
user3 = {name: 'Tom', age: 40}
user3 = [1,2]
user3 = true
user3 = 50
console.log(user3)
