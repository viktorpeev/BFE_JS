

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    // First I create a function which i can call at any point that i would need it (curried)
    return function curried(...args) { // curried() accepts the first argument
      if (args.length >= fn.length) { 
        // checks if the length of the first argument is grater than or equal to the
        // expected length of the function join() which at the moment is 3
        return fn.call(this, ...args);
         // call fn which references the join() and pass 'this' as an unspecified scope name
         // and ...args as the passed arguments   
      }
  
      return (...nextArgs) => {
         // if the length of args is shorter than the expected length of fn = join()
         // go to the next passed argument and call the curried() by passign the first ...args
         // and the latests ...nextArgs combined unitll the above if (args.length >= fn.length) is true
        return curried.call(this, ...args, ...nextArgs)
      }
  
    }
  }
  
  
  const join = (a, b, c) => {
    return `${a}_${b}_${c}`
  }
  
  const curriedJoin = curry(join)
  
  console.log(curriedJoin(1, 2, 3)) // '1_2_3'
  
  console.log(curriedJoin(1)(2, 3)) // '1_2_3'
  
  console.log(curriedJoin(1, 2)(3)) // '1_2_3'
  
  
  
  