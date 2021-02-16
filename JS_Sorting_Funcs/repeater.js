function repeatStringNumTimes(str, num) {
    if(num>0){
      let output = ''
      while(num>0){
        output+=str
        if(num>1) output+=' '
        num--
      }
      return output;
    }
    else return ''
  }
  
  console.log(repeatStringNumTimes("xyz", 3));
  console.log("Or use the repeat.() function")
  console.log(("-> ", 'abraxas'.repeat(3) ))