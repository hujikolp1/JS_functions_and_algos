/*
=================================DESCRIPTION====================================
Optimising quick sort

Let’s see how quicksort works and see if we can optimize solution further?
Idea behind quicksort is to find the correct place for the selected pivot.
Once the pivot is at the correct position, all the elements on the left side of
the pivot are smaller and on the right side of the pivot are greater than the
pivot. This step is partitioning.

If after partitioning, pivot is at position j, can we say that pivot is actually
jth smallest element of the array? What if j is equal to k? Well problem solved,
we found the kth smallest element.

If j is less than k, left subarray is less than k, we need to include more
elements from right subarray, therefore kth smallest element is in right
subarray somewhere. We have already found j smallest elements, all we need to
find is k-j elements from right subarray.

What if j is greater than k? In this case, we have to drop some elements from
left subarray, so our search space would be left subarray after partition.

Theoretically, this algorithm still has the complexity of O(n log n), but
practically, you do not need to sort the entire array before you find k smallest
elements.
================================================================================
*/


//==============================================================================
//=================================S_W_A_P======================================
//==============================================================================

function swap(inputArray, i, j) {
  temp = inputArray[i];
  inputArray[i] = inputArray[j];
  inputArray[j] = temp;
}

//==============================================================================
//=============================S_W_A_P__[[TEST]]================================
//==============================================================================

// testArray1 = [3,4,5,6,7,8];
// swap(testArray1, 1, 5);
// console.log(testArray1);

//==============================================================================

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
//==========================PIVOT__PARTITION__[[TEST]]==========================
//==============================================================================

// testArray2 = [22,5,3,8,16,4,90,85,45,34,27,6,44];
// testArray2__LENGTH = testArray2.length - 1;
// console.log("testArray2:22,                    ", testArray2);
// console.log("testArray2__LENGTH: ", testArray2__LENGTH);
// partition(testArray2, 8, testArray2__LENGTH);
// console.log("partition(testArray2, 8, length): ", testArray2);


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

partition(thing, 1, thing__LENGTH);

console.log(kSmall(position, thing, 0, thing__LENGTH));








//==============================================================================
//============================___E_N_D___A_L_L___===============================
//==============================================================================
