let userScores = {
    alice: 25,
    barry: 32,
    christy: 28,
    dan: 13,
    greg: 35,
    hank: 27
  };
  
  function checkScore(score) {
    // return userScores.score // returns undefined
    return userScores[score] 
  }
  
  console.log(checkScore("christy"));