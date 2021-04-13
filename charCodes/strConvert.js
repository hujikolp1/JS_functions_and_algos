function strConvert(str) {
    var inputStr = str
    console.log('inputStr -> ', inputStr)
    var binStr = [];
  
    let binFromChar
    for (let i in inputStr) {
        for(let j in inputStr[i]){
            binFromChar = inputStr[i][j].charCodeAt(0).toString(2);
            binStr.push( binFromChar + ' ');
        }        
    }
    console.log('binStr -> ', binStr.join(''))
    return binStr.join('');
  }
  
  strConvert( 'the answer is 42' );


