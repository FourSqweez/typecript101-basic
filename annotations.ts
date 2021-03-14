export {}
let num: number
num = 5

let greet1: string = 'Hi'

const greet2: string = 'Hello'
let isEqual1: boolean = true
const isEqual2: boolean = false

const numbers: number[] = [5, 6, 7]

const names: Array<string> = ['tim', 'tom', 'jane']

const user: {
  name?: string
  email: string
  password: string
  age: number
  gender: 'Male' | 'Female'
} = {
  name: 'time',
  email: 'tim@test.com',
  password: '1234',
  age: 15,
  gender: 'Male',
}

const sum: (a: number, b: number) => number = (
  x: number,
  y: number
): number => {
  return x + y
}
