function destroyer(arr) {
    let rest = []
    let inputArrLength = arr.length
    for(let j=1;j<arguments.length;j++){
      rest.push(arguments[j])
    }
    // console.log('rest -> ', rest)
    let newArr=[]
    let check = false
  
    for(let k=0;k<inputArrLength-1;k++){
      // console.log('arr[k] -> ', arr[k])
  
      for(let i=0;i<rest.length;i++){
        // console.log('rest[i] -> ', rest[i])
        if(arr[k]===rest[i]){
          check = true
        }
        if(check){
          console.log('check: ',arr[k], ' !== ', rest[i])
          // newArr.push(arr[k])  
          arr.splice(k,1)
          console.log('arr splice -> ', arr)
          inputArrLength--
          check=false
          // break  
        } else {
          continue
        }   
        }
      }
    // console.log('newArr -> ', newArr)
      console.log('final arr -> ', arr)
  
  
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  //===========================

  function destroyer2(arr){
    let args = Array.from(arguments)
    args = args.slice(1)
    return arr.filter((item)=>{
        console.log('args.includes(item) -> ',args.includes(item))
      return !args.includes(item)
    })
    console.log('args -> ',args)
  
    return arr;
  }

  destroyer2([9,8,7,6,5,4,3,2,1], 1,3,5,7,9)