function charCodeCheck(arr) {
    let str1 = arr[0].toLowerCase()
    let str2 = arr[1].toLowerCase()
  
    let shaddow = new Array()
  
    for(let i=0; i<str1.length; i++){
      shaddow[str1.charCodeAt(i)]=str1.charCodeAt(i)
    }
    console.log("-> ", shaddow)
    for(let j=0; j<str2.length; j++){
      let charCode = str2.charCodeAt(j)
      console.log('charCode ', charCode)
      if(shaddow[charCode] === undefined){
        return false
      }
    }
  
    return true;
  }
  
  console.log(charCodeCheck(["hayellow", "hey"]));
  console.log(charCodeCheck(['nope','sowwy']));