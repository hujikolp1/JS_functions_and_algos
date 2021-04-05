function translatePigLatin(str) {
    let re = /^[^aeiou]/i
    let re2 = /[aeiou]/i
  
    // if first char is NOT aeiou, ie IS consonant 
    if( !re2.test(str[0]) ) {
      let tempChar;  
      let charIndex; 
      for(let i=0;i<str.length;i++) {
        if (i===str.length-1){   
          return str = str.concat('ay')
        }
        if( !re2.test(str[i])  ) {
          continue
        } 
        else {
          charIndex = i; 
          break 
        }
      }
      tempChar = str.slice(0,charIndex)
      str=str.slice(charIndex, str.length)
      str = str.concat(tempChar+'ay')
    } 
    // if first char IS aeiou
    else if (re2.test(str[0])){
      str = str.concat('way')
    }
    return str;
  }
  
  translatePigLatin("consonant");