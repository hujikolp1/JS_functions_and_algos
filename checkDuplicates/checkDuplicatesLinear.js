//==============================================================================
//==========================Check_Duplicates_Linear=============================
//==============================================================================

function checkDuplicatesLinear(inputArray){

  let shadowArray = [];
  let duplicates = false;

  for (let i = 0; i < inputArray.length; i++){

    if (shadowArray[inputArray[i]] === undefined) {
      shadowArray[inputArray[i]] = 1;
    }
    else if (shadowArray[inputArray[i]] === 1){
      console.log(`Duplicate found at index: `, i);
      duplicates = true;
    }

  }
  return duplicates;

}

//==============================================================================
//======================Check_Duplicates_Linear_[[TEST]]========================
//==============================================================================

let testArray = [11,22,33,44,55,66,77,88,99,100,11,22,33];

checkDuplicatesLinear(testArray);

//==============================================================================
//===========================___E_N_D___A_L_L___================================
//==============================================================================
