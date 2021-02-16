let truthyOrFalsy = ['hi', 10, 0, null, 33, NaN, true, false, 77, '', 'wee', undefined]

let result = truthyOrFalsy.filter( (i)=>{
    return Boolean(i)
})

console.log('-> ', result)