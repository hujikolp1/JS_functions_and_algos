let str = "There are 5 senses one has to experience";
let vowelRegex = /[aeiou]/gi; // all vowel matches globallay and case insensitive
let result = str.match(vowelRegex); 
console.log("result -> ", result)

let str2 = "If it waddles like a duck, if it quacks like a duck, if it ...";
let alphabetRegex = /[a-z]/gi; // all letter matches globallay and case insensitive
let result2 = str2.match(alphabetRegex); 
console.log("result2 -> ", result2)

let str3 = "I enjoy yogurt with no added sugars please, since they are delicious at 1 or 5.";
let rangeRegex = /[n-y1-5]/gi; // h to s and 1 to 5
let result3 = str3.match(rangeRegex); 
console.log("result3 -> ", result3)
