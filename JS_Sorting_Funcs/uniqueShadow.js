function uniteUnique(arr) {
    let argsArr = Array.from(arguments)
    let shadow = []
    let res=[]; 
    // N^2 time with nested loops
    for(let i in argsArr){
      for(let k in argsArr[i]){
        if( shadow[argsArr[i][k]] === undefined){
          res.push( argsArr[i][k] )
          shadow[argsArr[i][k]] = 1
        }
      }
    }
    
    console.log('-> ', res)
    return res;
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) 