function smallestCommons(arr) {
  let smaller = arr[0]
  let bigger = arr[1]
  if(smaller > bigger){
    smaller = arr[1]
    bigger = arr[0]
  }
  // const [min, max] = arr.sort((a, b) => a - b);
  // console.log('MAX ', max)
  let range = []
  for(let i=smaller;i<=bigger;i++){
    range.push(i)
  }
  console.log('range ',range)

  // prime factorization 

  function primeFactors(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }

  let primeFactorArr = []
  for(let j in range){
    let facts = primeFactors(range[j])
    primeFactorArr.push(facts)
  }
  console.log('primeFactorArr ', primeFactorArr)

  let uniqueFactors = []
  // find each prime factor
  // find highest multiplier 
  let multiple = 1;
  for (let i in primeFactorArr) {
    for(let j in primeFactorArr[i]){
      if( !uniqueFactors.includes(primeFactorArr[i][j]) ){
        uniqueFactors.push(primeFactorArr[i][j])
      }
      else {
        continue
      }
    }
  }
  console.log('uniqueFactors ',uniqueFactors)

  let highestFactorMultiple = {}

  for(let key in uniqueFactors){
    highestFactorMultiple[uniqueFactors[key]] = 0
  }
  console.log('highestFactorMultiple --> ', highestFactorMultiple)

  let highestCount = {}
  for (let key in highestFactorMultiple) {
    console.log('highestFactorMultiple[key]', key)
    
    for(let i in primeFactorArr){
      let count = 0
       
      for(let j in primeFactorArr[i]){
        if(key == primeFactorArr[i][j]){
          count++
        }
      }
      if(highestFactorMultiple[key] < count){
        highestFactorMultiple[key] = count
      }
    }
  }
  console.log('highestFactorMultiple ', highestFactorMultiple)
  let final = 1
  for(let key in highestFactorMultiple){
    let expo = key ** highestFactorMultiple[key]
    final *= expo
  }
  console.log("FINAL ", final)


  return final;
}


smallestCommons([2,10]);