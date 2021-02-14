let title = "The Adventures of 83762 Moby Dick";
let numShorthandRegex = /\d/g; 
let result = title.match(numShorthandRegex);
console.log("-> ", result)
console.log("and a non-digit shorthand is \D")
let negateNumShort = /\D/g
let result2 = title.match(negateNumShort)
console.log("-> ", result2)
