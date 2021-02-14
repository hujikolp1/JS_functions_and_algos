// someStr@someStr.someStr
const emailRegex =  /\S+@\S+\.\S+/gi
const testEmail1 = 'boburncle5@aol4.com3'
let result = testEmail1.match(emailRegex)
console.log("-> ", result)
let testResult = emailRegex.test(testEmail1)
console.log("-> ", testResult)