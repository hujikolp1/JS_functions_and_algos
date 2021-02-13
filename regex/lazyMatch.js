const spell = "abracadabra allakazam"
const spellRegex = /a[a-z]*?a/
let result = spell.match(spellRegex)
console.log("shortest match -> ", result)

let saying = "<h2>Get them while they're hot</h2>";
let sayingRegex = /<.*?>/; 
let result2 = saying.match(sayingRegex);
console.log("lazy -> ", result2)