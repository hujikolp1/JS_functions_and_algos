//==============================================================================
//=========================Check_Duplicates_Quadratic===========================
//==============================================================================

function checkDuplicatesQuadratic(inputArray){

  let duplicates = false;
  let counter = 0;

  for (let i = 0; i < inputArray.length; i++){
    for (let j = i; j < inputArray.length; j++){

      if (i !== j && inputArray[i] == inputArray[j]){
        console.log(`Duplicates found at indices: `, i, ` and `, j);
        duplicates = true;
        counter++;
      }

    }
  }

  console.log(`Number of duplicates found: `, counter);
  return duplicates;
}

//==============================================================================
//=========================Check_Duplicates_[[TEST]]============================
//==============================================================================

let testArray = [11,22,33,44,55,66,77,88,99,100,11,22,33];

checkDuplicatesQuadratic(testArray);

//==============================================================================
//===========================___E_N_D___A_L_L___================================
//==============================================================================
