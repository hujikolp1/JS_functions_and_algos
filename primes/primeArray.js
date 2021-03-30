function sumPrimes(num) {
    let inputNum = num; 
    let halfCount; 
    let stillPrime; 
    let primeArr = []
  
    while(inputNum > 1){
  
      halfCount = Math.ceil(inputNum/2)
      stillPrime = true
  
      for(let i=halfCount; i>=2; i--){
        if(inputNum % i === 0){
          console.log('NOT PRIME: ', inputNum)
          stillPrime = false
          break 
        }
      }
      if(stillPrime===true){
        console.log('YES PRIME: ', inputNum)
        primeArr.push(inputNum)
      }
  
      --inputNum 
  
    }
    let res = primeArr.reduce( (accu, curr)=>{
      return accu+curr
    })
    console.log('res: ', res)
  
    return res;
  }
  
  sumPrimes(10);