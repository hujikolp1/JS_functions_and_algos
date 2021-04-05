function smallestCommons(arr) {
    let smaller = arr[0]
    let bigger = arr[1]
    if(smaller > bigger){
      smaller = arr[1]
      bigger = arr[0]
    }
    let range = []
    for(let i=smaller;i<=bigger;i++){
      range.push(i)
    }
    console.log('range ',range)
  
    // prime factorization 
  
    // LCM = combo of least prime factors 
    
    return arr;
  }
  
  
  smallestCommons([9,5]);