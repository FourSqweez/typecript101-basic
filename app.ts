export {}
// Any

let a: any

a = 1

// a = 'a'
// a = true
// a = [1, 2]
// a = { a: 1, b: 2 }
// console.log('a', a)

// Unknown

let x: unknown

x = 'a'

if (typeof x === 'string') {
  const y = x.toUpperCase()
  console.log('y: ', y)
}

// x = 'b'
// x = false
// x = ['a','b']
// x = {a: 5, b:7}

console.log('x: ', x)
