function Device() {
    let width = 100; // private
    this.tabWidth = 200 // public 
  
    this.getWidth = ()=>{
      return width
    }
  
  }
  
let tablet = new Device()
console.log(tablet.getWidth())

console.log(tablet.width)