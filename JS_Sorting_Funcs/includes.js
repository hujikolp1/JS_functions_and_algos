function diffArray(arr1, arr2) {
    var newArr = [];
    let larger; 
    if(arr1.length>=arr2.length) larger=arr1.length
    else larger=arr2.length
    for(let i=0;i<arr1.length;i++){
      if( !arr2.includes(arr1[i]) ){
        newArr.push(arr1[i])
      }
    }
    for(let i=0;i<arr2.length;i++){
      if( !arr1.includes(arr2[i]) ){
        newArr.push(arr2[i])
      }
    }
    console.log('-> ', newArr)
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);