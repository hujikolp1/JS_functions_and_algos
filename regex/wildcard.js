let owStr = "how wow meow cow";
let wildRegex = /.ow/; 
let result = wildRegex.test(owStr);
console.log("-> ", result)

let cowGo = "Mooooooooo mooooo"; 
let cowRegex = /Mo*/; 
let result2 = cowGo.match(cowRegex);
console.log("-> ", result2)

