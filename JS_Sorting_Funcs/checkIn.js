let userScores = {
    alice: 25,
    barry: 32,
    christy: 28,
    dan: 13,
    erica: 40, 
    greg: 35,
    hank: 27
  };

let ans1 = userScores.hasOwnProperty('alice')
console.log("hasOwnProperty -> ", ans1)

let ans2 = userScores

const checkLowScore = (userObj) => {
    for(let key in userObj){
        console.log(key," -> ",userObj[key])
    }
}

console.log("-> ", checkLowScore(userScores))
