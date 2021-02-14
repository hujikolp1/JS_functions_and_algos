let longWayRegex = /[A-Za-z0-9-]+|[ ]/g;
let shortWayRegex = /\w+/g;
let str = "does it also include the-dash?"
console.log(shortWayRegex.test(str))
console.log(str.match(longWayRegex))

console.log("There is also shorthand alpha num negation with \W")

let negateShortWay = /\W/g
let thing = '!@#$%^&*() hello )(*&^%$#@!'
console.log(negateShortWay.test(thing))
console.log(thing.match(negateShortWay))