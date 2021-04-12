function strConvert(str) {
    var binString = str.split(' ');
    var charString = [];
  
    for (let i in binString) {
        let intFromBin = String.prototype.charCodeAt(binString[i], 2)
        console.log()
        charString.push( intFromBin  );
    }
  
    console.log('charString -> ', charString.join(''))
    return charString.join('');
  }
  
  strConvert( 'hollow' );