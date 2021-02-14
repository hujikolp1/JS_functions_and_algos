// positive: (?=...)
// negative: (?!...)

let userNameRegex = /(?=\w{6,12})(?=\D*\d)/
let someUser = "bowser4545"
let wrongUser = "**guy12**"

let result = someUser.match(userNameRegex)
console.log("-> ",result)

let result2 = wrongUser.match(userNameRegex)
console.log("-> ",result2)
