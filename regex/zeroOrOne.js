let longName = "Harrald";
let nameRegex = /Harr?ald/; 
let result = nameRegex.test(longName);
console.log("-> ", result)