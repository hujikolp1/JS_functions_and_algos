let quoteSample = "A slice or 2 for me.";
let myRegex = /[^0-9aeiou]/gi; 
let result = quoteSample.match(myRegex); 
console.log("result -> ", result)