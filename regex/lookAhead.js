function spinalCase(str) {
    let re = /\s|_|(?=[A-Z])/
    str = str.split(re)
    console.log('1 -> ', str)
  
    str = str.join('-').toLowerCase()
    console.log('2 -> ', str)
  
    return str;
  }
  
  spinalCase("AllThe-small Things")