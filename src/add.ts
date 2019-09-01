// console.log([] + []) // TS error
// console.log({} + []) // TS error
// console.log([] + {}) // TS error
// console.log({} + {}) // TS error

// console.log(5 == '5') // TS error
// console.log(5 === "5") // TS error
//
// const a = 5
// const b = '5'
// const c = 10
// const d = 5
//
// console.log(a != b) // TS error
// console.log(a != c) // TS error
// console.log(a !== c) // TS error
// console.log(a === d) // ok!

const list = [ 1, 2, 3, 4 ]

list.map((item: number, index: number) => {
    if (item === 4) { // ok!
      console.log(item)
    }
})

const a: string[] = []
const b = a
const c: string[] = [ '' ]

console.log(a === b)
console.log(a === c)
