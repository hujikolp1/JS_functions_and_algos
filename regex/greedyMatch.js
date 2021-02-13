const spell = "abracadabra allakazam"
const spellRegex = /a[a-z]*a/
let result = spell.match(spellRegex)
console.log("greedy is default not lazy")
console.log("longest match -> ", result)