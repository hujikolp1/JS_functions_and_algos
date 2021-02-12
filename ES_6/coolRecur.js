function countdown(n){
  console.log("first n -> ", n)
  if(n<=0){
    return []
  } else {
    console.log("in else")
    const arr = countdown(n-1)
    arr.push(n)
    console.log("n -> ", n)
    console.log("arr -> ", arr)
    return arr
  }
}
countdown(7)


function rangeOfNumbers(startNum, endNum) {
  if(endNum<=startNum){
    console.log("startNum -> ", startNum)
    console.log("endNum -> ", endNum)
      return [endNum];
  } else {
    let arr = rangeOfNumbers(startNum, endNum-1)
    arr.push(endNum)
    console.log("arr -> ", arr)
    return arr
  }
};