let repeatedPattern = "No no no no no no no no";
let groupRegex = /(\w+)(\s)\1\2\1$/gi; 
let result = groupRegex.test(repeatedPattern);
console.log("-> ", result)