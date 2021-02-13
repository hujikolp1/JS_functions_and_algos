let theEnd = "And they lived happily ever after, the end";
let endRegex = /the end$/; 
let result = endRegex.test(theEnd);
console.log(endRegex)
console.log("ending pattern -> ", result)