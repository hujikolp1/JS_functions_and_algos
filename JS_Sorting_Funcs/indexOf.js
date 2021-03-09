let names = ['chuck', 'steve', 'bob', 'jane', 'sue', 'sally', 'bob']
console.log("index of sue -> ", names.indexOf('bob'))
console.log("index of patty -> ", names.indexOf('patty'))

//=================================================

function diffArray(arr1, arr2) {
    var newArr = [];
    
    newArr = arr1.concat(arr2); 
    
    function filterFunc(num) {
      if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
        return num;
      }
    }
    
    return newArr.filter(filterFunc);
    
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);