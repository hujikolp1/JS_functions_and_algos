let cowAndGoat = "Cow and goat both like eating the grass.";
let cowRegex = /^Cow/; 
let result = cowRegex.test(cowAndGoat);
console.log("Cow is first literal in string? -> ", result)