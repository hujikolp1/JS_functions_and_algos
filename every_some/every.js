function checkPositive(arr) {
    return arr.every( (curr)=> {
      return curr > 0
    })
}
console.log('-> ', checkPositive([1, 2, 3, -4, 5]))
checkPositive([1, 2, 3, -4, 5]);