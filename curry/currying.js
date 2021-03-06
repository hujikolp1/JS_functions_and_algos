function add(x) {
    return (y)=>{
      return (z)=>{
        return x+y+z
      }
    }
  }
console.log('-> ', add(10)(20)(30))