//==========================
//     Positive Lookahead

function spinalCase(str) {
    let re = /\s|_|(?=[A-Z])/
    str = str.split(re)
    console.log('1 -> ', str)
    str = str.join('-').toLowerCase()
    console.log('2 -> ', str)

    return str;
}
  
spinalCase("AllThe-small Things")

//==========================
//     Negative Lookahead

let negativeLookAhead = "3 sodas costs 4$";

console.log('negativeLookAhead -> ', 
    negativeLookAhead.match( /\d+\b(?!$)/g)  ); 
    // 3 (the price is not matched)


//==========================
//     Positive Lookabehind

// Positive lookbehind: (?<=Y)X, matches X, but only if there’s Y before it.

let positiveLookBehind = "1 turkey costs $30";

// the dollar sign is escaped \$
console.log('positiveLookBehind -> ', 
    positiveLookBehind.match(/(?<=\$)\d+/) ); 
    // 30 (skipped the sole number)

//==========================
//     Negative Lookabehind

// Negative lookbehind: (?<!Y)X, matches X, but only if there’s no Y before it.

let negativeLookBehind = "2 turkeys cost $60";

console.log('negativeLookBehind -> ', 
    negativeLookBehind.match(/(?<!\$)\b\d+/g) ); 
    // 2 (the price is not matched)