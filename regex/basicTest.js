let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString) 
console.log("result -> ", result)

let petString = "I have a dog.";
let petRegex = /dog|cat|bird|fish/; 
let result2 = petRegex.test(petString);
console.log("result2 -> ", result2)