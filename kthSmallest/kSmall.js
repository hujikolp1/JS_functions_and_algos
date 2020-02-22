//==============================================================================
//=================================S_W_A_P======================================
//==============================================================================

function swap(inputArray, i, j) {
  temp = inputArray[i];
  inputArray[i] = inputArray[j];
  inputArray[j] = temp;
}

//==============================================================================
//=============================PIVOT__PARTITION=================================
//==============================================================================

function partition(inputArray, start, end) {

  pivotIndex = inputArray[start];
  i = start + 1;
  j = end;

  while (i <= j)
  {
    for (i; inputArray[i] < pivotIndex; i++);
    for (j; inputArray[j] > pivotIndex; j--);
    if(i < j) {
      swap(inputArray, i, j);
    }
  }
  swap(inputArray, start, j);
  return j;
}

//==============================================================================
//============================kSmall___R_E_C_U_R_S_I_O_N========================
//==============================================================================

function kSmall(k, inputArray, start, end){
  p = partition(inputArray, start, end);

  if (p == k-1){
    return inputArray[p];
  }

  if (p > k-1){
    return kSmall(k, inputArray, start, p);
  }

  if (p < k-1){
    return kSmall(k, inputArray, p+1, end);
  }

}


//==============================================================================
//=======================kSmall___R_E_C_U_R_S_I_O_N__[[TEST]]===================
//==============================================================================

console.log("");
console.log("");
thing = [22,5,3,8,16,4,90,85,45,34,27,6,44];
thing__LENGTH = thing.length - 1;
console.log("thing:                      ", thing);
console.log("thing__LENGTH: ", thing__LENGTH);
console.log("");
console.log("");

position = 4;

console.log(`kth smallest integer in array is: `,
  kSmall(position, thing, 0, thing__LENGTH));

//==============================================================================
//============================___E_N_D___A_L_L___===============================
//==============================================================================
