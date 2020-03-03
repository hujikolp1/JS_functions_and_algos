//==============================================================================
//===========================JS_Sort()_Ascending================================
//==============================================================================

let unsortedThing = [1,88,3,20,6,7,33,14,16,98];
console.log("Unsorted: ", unsortedThing);
let sortedAscending = unsortedThing.sort(function(a,b){return a-b});
console.log("Sorted Ascending: ", sortedAscending);
let sortedDescending = unsortedThing.sort(function(x,y){return y-x});
console.log("Sorted Descending: ", sortedDescending);

//==============================================================================
//===========================___E_N_D___A_L_L___================================
//==============================================================================
