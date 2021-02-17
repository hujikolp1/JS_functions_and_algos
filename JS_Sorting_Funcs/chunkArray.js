function chunkArray(arr, size) {
    let finalArr = []
    let count = 0
  
    while(count < arr.length){
      finalArr.push( arr.slice(count, count+=size))
    }
  
    console.log('-> ', finalArr)
    return finalArr;
  }
  
  
  chunkArray(["a", "b", "c", "d", "e", "f", "g"], 2);