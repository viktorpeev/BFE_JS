
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    // your code here
}

const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder


curry.placeholder = Symbol()

console.log(curriedJoin(1, 2, 3)) // '1_2_3'

console.log(curriedJoin(_, 2)(1, 3)) // '1_2_3'

console.log(curriedJoin(_, _, _)(1)(_, 3)(2)) // '1_2_3'



