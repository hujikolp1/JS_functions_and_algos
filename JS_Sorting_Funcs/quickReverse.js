function reverseStr(str) {
    console.log("split('') -> ",str.split(''))
    console.log("reverse() -> ", str.split('').reverse())
    console.log("join('') -> ", str.split("").reverse().join(""))
    return str.split("").reverse().join("");
  }
  
  reverseStr("weeweewoowoo");