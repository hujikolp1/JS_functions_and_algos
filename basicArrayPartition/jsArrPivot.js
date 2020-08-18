function swap(inputArray, i, j) {
  temp = inputArray[i];
  inputArray[i] = inputArray[j];
  inputArray[j] = temp;
}

let jsPivot = (arr, left, right) => {
  var pivot = arr[Math.floor( (right + left) / 2)];
  console.log("Middle Pivot of Right & Left is: ", pivot);
  var i = left;
  var j = right;

  while(i <= j) {

    while (arr[i] < pivot) {
      i++; // skip
    }
    while (arr[j] > pivot) {
      j--; // skip
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
      console.log("...swapping array: ", arr);
    }
  }

  return i;
}

//                      TEST

let testArr = [9,1,6,7,3,4,5,8,2];
console.log(jsPivot(testArr));

//                      EXPORT
module.exports = jsPivot;
