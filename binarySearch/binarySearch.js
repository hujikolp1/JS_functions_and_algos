function binarySearch(inputArray, numToFind) {

  let lower = 0;
  let upper = inputArray.length - 1;

  while (lower <= upper) {

    let midpoint = Math.floor((upper+lower) / 2);
    let valAtMid = inputArray[midpoint];

    if (numToFind < valAtMid) {
      upper = midpoint - 1;
    }
    else if (numToFind > valAtMid) {
      lower = midpoint + 1;
    }
    else if (numToFind == valAtMid) {
      console.log("Success: ", numToFind, " Index Position @ ")
      return midpoint;
    }

  }
  console.log("Failure: ", numToFind, " Not found")
  return 0;

} //================================END_FUNC_DEF================================

let testOrderedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(binarySearch(testOrderedArray, 15));

console.log(binarySearch(testOrderedArray, 22));
