// splice mutates the actual object at its reference value 
// slice does not


let spliceVal = [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0];
console.log("spliceVal before ", spliceVal)
spliceVal.splice(0,spliceVal.length/2)
console.log("spliceVal after ", spliceVal)

let sliceVal = [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0];
console.log("sliceVal before ", sliceVal);
sliceVal.splice(0,spliceVal.length/2);
console.log("sliceVal after ", sliceVal);

const numArr = [100, 101, 102, 103, 105];
console.log("before -> ", numArr)
let startIndex = 2;
let amountToDelete = 1; 
let valuesToAdd = [106,107];
numArr.splice(startIndex, amountToDelete, ...valuesToAdd);
console.log("after -> ", numArr)



