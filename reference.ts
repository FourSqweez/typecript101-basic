export {}

// reference มาจาก annotations.ts
let num: number
num = 5

let greet1 = 'Hi' // เราลบ type ออกได้ เพราะ typescript มันรู้เองว่าเป็นสตริง สามารถเปลี่ยนค่าได้แต่ต้องเป็นสตริง
const greet2 = 'Hello' // ถ้าเป็น const แล้วเราไม่ได้ระบุ type แต่แรก ตัวนี้จะมี type เป็น Hello ทันที เพราะ const เป็นค่าคงที่
let isEqual1 = true
const isEqual2 = false 


const numbers = [5, 6, 7]

const names = ['tim', 'tom', 'jane']

const user = {
  name: 'time',
  email: 'tim@test.com',
  password: '1234',
  age: 15,
  gender: 'Male',
}

const sum = (x: number, y: number) => {
  return x + y
}
