const spell = "abracadabra allakazam"
const spellRegex = /a[a-z]*a/
let result = spell.match(spellRegex)
console.log("longest match -> ", result)