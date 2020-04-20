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
/*
For i, keep shifting right until Array Item greater than or equal to Pivot Index
For j, keep shifting left until Array Item less than or equal to Pivot Index
*/
    for (i; inputArray[i] < pivotIndex; i++);
    for (j; inputArray[j] > pivotIndex; j--);
/*
If i < j, swap or "pivot" the Array Items around the Pivot Index
Such that the Array Item to the left of the Pivot Index is less than Pivot,
and the Array Item to the right of the Pivot Index is greater than Pivot.
Note: this process must run N times, in the worst case scenario, for an array of
size N to get the entire array "pivoted"
*/
    if (i < j)
    {
      swap(inputArray, i, j);
    }
  }
/*
Swap starting Array Item with ending Array Item j to place Pivot in center
Then return j as the index value of the Pivot
*/
  swap(inputArray, start, j);
  console.log("Pivoted Array: ", inputArray)
  return j;
}

//==============================================================================
//============================kSmall___R_E_C_U_R_S_I_O_N========================
//==============================================================================

function kSmall(k, inputArray, start, end){
  p = partition(inputArray, start, end);
/*
CASE # 1
Base Case: If the Pivot is equal to the Kth smallest item
*/
  if (p == k - 1){
    return inputArray[p];
  }
/*
CASE # 2
If the left side of the Pivoted Array has k or more items,
Then the Kth smallest is in the section from Start to Pivot
*/
  if (p > k-1){
    return kSmall(k, inputArray, start, p);
  }
/*
CASE # 3
If the right side of the Pivoted Array has less than k items,
Then the Kth smallest item is in the section from Pivot + 1 to End
*/
  if (p < k-1){
    return kSmall(k, inputArray, p+1, end);
  }

}

//==============================================================================
//=======================kSmall___R_E_C_U_R_S_I_O_N__[[TEST]]===================
//==============================================================================

console.log("=========================[[TEST]]===============================");
console.log("================================================================");
unsortedThing = [22,5,3,8,16,4,90,85,45,34,27,6,44];
console.log("sorted: ", "[ 3, 4, 5, 6, 8, 16, 22, 27, 34, 44, 45, 85, 90 ]");
thing__LENGTH = unsortedThing.length - 1;
console.log("unsortedThing:                      ", unsortedThing);
console.log("================================================================");
let position = 7;
console.log("Position to pivot is: ", position);
console.log(`kth smallest integer in array is: `,
  kSmall(position, unsortedThing, 0, thing__LENGTH));
console.log("================================================================");
console.log("=======================END__[[TEST]]============================");

//==============================================================================
//============================___E_N_D___A_L_L___===============================
//==============================================================================
