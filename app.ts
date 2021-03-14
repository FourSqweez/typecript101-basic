export {}

//* Dynamic type vs Static type

let str: number
str = 10
console.log(typeof str)

const sum = (a: number, b: number) => {
    return a+b
}


const total = sum(5, 10)
console.log(total)
  
  //* 1. string --> 'hello', "5", `true`
  //* 2. number --> 10, 8.75
  //* 3. boolean --> true / false
  
