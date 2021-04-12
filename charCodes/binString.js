function binConvert(str) {
    var binString = str.split(' ');
    var charString = [];
  
    for (let i in binString) {
        let intFromBin = parseInt(binString[i], 2)
        charString.push(String.fromCharCode( intFromBin ));
    }
  
    console.log('charString -> ', charString.join(''))
    return charString.join('');
  }
  
  binConvert(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  );