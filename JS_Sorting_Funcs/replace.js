let str = 'to be or not to be'
let firstOccurance = str.replace('be', 'BE')
console.log('firstOccurance -> ', firstOccurance)

// replaceAll declared in Node 
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

let allOccurances = replaceAll(str,'to','TO')
console.log('allOccurances -> ', allOccurances)