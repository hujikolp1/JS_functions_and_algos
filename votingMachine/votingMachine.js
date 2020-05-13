//==============================================================================
//                        ADD VOTES

let votes = {};

function addVote(candidate) {
  if (votes[candidate]) {
    votes[candidate]++;
  }
  else {
    votes[candidate] = 1;
  }
}

function countVotes() {
  return votes;
}

//==============================================================================

addVote("Bush");
addVote("Gore");
addVote("Bush");
addVote("Bush");
addVote("Gore");
addVote("Gore");
addVote("Bush");

//==============================================================================
//                      REMOVE VOTES

function removeVotes(candidate) {
  if (votes[candidate]) {
    votes[candidate]--;
  }
  else {
    votes[candidate]--;
  }
}

//==============================================================================

removeVotes("Bush");

//==============================================================================
//                      LOG VOTES

console.log(countVotes());
