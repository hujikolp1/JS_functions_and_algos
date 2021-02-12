let str = "There are many sounds one can make with words";
let vowelRegex = /[aeiou]/gi; // all vowel matches globallay and case insensitive
let result = str.match(vowelRegex); 
console.log("result -> ", result)

let str2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // all letter matches globallay and case insensitive
let result2 = str2.match(alphabetRegex); 
console.log("result2 -> ", result2)

let str3 = "Blueberry 3.141592653s are delicious.";
let rangeRegex = /[h-s2-6]/gi; // h to s and 2 to 6 
let result3 = str3.match(rangeRegex); 
console.log("result3 -> ", result3)
