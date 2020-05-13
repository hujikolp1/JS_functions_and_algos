function swap(inputArray, i, j) {
  temp = inputArray[i];
  inputArray[i] = inputArray[j];
  inputArray[j] = temp;
}

function partition(inputArray) {

  let pivotPosition = inputArray.length - 1;
  let i = 0;
  let j = inputArray.length - 2;

  while (i <= j)
  {

    for (i; inputArray[i] < inputArray[pivotPosition]; i++);
    for (j; inputArray[j] > inputArray[pivotPosition]; j--);

    if (i < j)
    {
      swap(inputArray, i, j);
    }
  }

  swap(inputArray, pivotPosition, i);

  console.log("Pivoted Array: ", inputArray); 
  console.log("Pivot Position: ", i);

  return i;

}

//-----------------------------TEST---------------------------------------------
// console.log("--------TEST 1--------");
// let testArr = [1,7,9,4,2,3,6,8,5];
// console.log("testArr: ", testArr);
// console.log("Partition: ", partition(testArr));
// console.log("--------TEST 2--------");
// let testArr2 = [5,70,8,23,6,19,3,54,7,88,9,17];
// console.log("testArr2: ", testArr2);
// console.log("Partition: ", partition(testArr2));

//==============================================================================
//                            EXPORT

module.exports = partition;
