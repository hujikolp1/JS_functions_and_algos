function filteredArr(arr, el) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i].filter( (val)=>{
        return val != el
      }))
    }
    return newArr;
}

let testArr = [
    [1,2,3,9],
    [9,8,7,9],
    [3,6,9,9],
    [8,6,4,9]
]
console.log("before filter -> ", testArr)
let result = filteredArr(testArr, 9)
console.log("filter out the 9's -> ", result)