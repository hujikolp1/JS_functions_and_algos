let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString) // will return true 


let petString = "I have a dog.";
let petRegex = /dog|cat|bird|fish/; 
let result2 = petRegex.test(petString);