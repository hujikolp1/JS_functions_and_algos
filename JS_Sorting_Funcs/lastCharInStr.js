function lastChar(origStr, inputStr) {
    console.log("-> ",origStr.split('')[origStr.split('').length-1])
    return (origStr.split('')[origStr.split('').length-1])===inputStr;
  }
  
lastChar("Guadalajara", "r");


function sameEnding(str, target) {
    let strArr=str.split('')
    console.log("strArr -> ", strArr)
    let targetArr = target.split('')
    console.log("targetArr -> ", targetArr)
    console.log("str len: ",str.length-1)
    console.log("target len: ",target.length-1)
    let strLen = str.length-1
    let targetLen = target.length-1
    for(let i=0;i<targetArr.length;i++){
      if(targetArr[targetLen]!==strArr[strLen]){
        console.error("error at ", targetArr[targetLen])
        return false
      }
      else{
        strLen--
        targetLen--
      }
    }
    return true;
}
  
sameEnding("Bastian", "n");