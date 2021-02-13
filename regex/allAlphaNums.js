let longWayRegex = /[A-Za-z0-9-]+|[ ]/g;
let shortWayRegex = /\w+/g;
let str = "does it also include the-dash?"
console.log(shortWayRegex.test(str))
console.log(str.match(longWayRegex))