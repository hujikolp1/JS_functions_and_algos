//==============================================================================
//=============================Selection_Sort===================================
//==============================================================================

function selectionSort(inputArray) {

  for (let i = 0; i < inputArray.length; i++) {
    let lowestNumIndex = i;
    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[j] < inputArray[lowestNumIndex]) {
        lowestNumIndex = j;
      }
    }
    if (lowestNumIndex != i) {
      let temp = inputArray[i];
      inputArray[i] = inputArray[lowestNumIndex];
      inputArray[lowestNumIndex] = temp;
    }
  }
  return inputArray;

}

//==============================================================================
//==========================Selection_Sort_[[TEST]]=============================
//==============================================================================

let testArray = [9,1,8,3,7,4,6,5,33,0,88,14];
console.log(selectionSort(testArray)); 

//==============================================================================
//===========================___E_N_D___A_L_L___================================
//==============================================================================
