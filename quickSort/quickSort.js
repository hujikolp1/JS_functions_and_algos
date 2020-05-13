const basicPartition = require('../basicArrayPartition/basicArrayPartition.js');
const jsPivot = require('../basicArrayPartition/jsArrPivot.js');
//==============================================================================
//                       TEST PARTITION

let testArr = [-7,9,2,-1,8,5,6,7,3];

console.log("=====Basic Partition=====");
console.log("Un-Pivoted Array: ", testArr);
console.log(basicPartition(testArr));

//==============================================================================
//                      QUICKSORT

const quickSort = (inputArray, left, right) => {

  var index;

  if(inputArray.length > 1) {

    index = jsPivot(inputArray, left, right);

    if(left < index - 1) {
      quickSort(inputArray, left, index - 1);
    }
    if(index < right) {
      quickSort(inputArray, index, right);
    }
  }
  return inputArray;

}

//==============================================================================
//                       TEST QUICKSORT

console.log("=====TEST QUICKSORT=====");
let testArr2 = [11,6,7,32,4,9,5,12,41,81,16];
console.log("Array is: ", testArr2);
console.log("Quick Sorted Array is: ", quickSort(testArr2, 0, testArr.length-1));
