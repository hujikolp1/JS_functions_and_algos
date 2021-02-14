let str = "This is so cool"
console.log("before -> ", str)
let str2 = str.replace(/(\w+)\s(\w+)/, '$2 $1')
console.log("after -> ", str2)


let str3 = "one two three";
let patternRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceStr = "$3 $2 $1"; 
let result = str3.replace(patternRegex, replaceStr);
console.log("-> ", result)

// trim any trailing or beginning whitespaces
// without using trim() method 

let str4 = "   That's all folks!  ";
let trimRegex = /^\s*|\s*$/g; 
let result2 = str4.replace(trimRegex,""); 
console.log("-> ", result2)

let str5 = "      a long long time ago        "; 
let trimRegex2 = /\S.*\S/;
let result3 = str5.match(trimRegex2);
console.log("-> ", result3)