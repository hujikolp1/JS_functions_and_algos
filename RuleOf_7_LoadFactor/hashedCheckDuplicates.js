//==============================================================================
/*
Similarly to checkDuplicates in repo, except JS objects (or hash tables) are
used
*/
//==============================================================================
let hash = require('object-hash');
//==============================================================================
//=========================hashed_Check_Duplicates==============================
//==============================================================================

function hashedCheckDuplicates(inputHash) {
  let existingElements = {};
  for (let i = 0; i < inputHash.length; i++) {
    if (existingElements[inputHash[i]] === undefined) {
      console.log(inputHash[i]);
      existingElements[inputHash[i]] = 1;
    }
    else {
      return true;
    }
  }
  console.log("Are there duplicates in the hash ?: ");
  return false;
}

function hashObject(inputObj) {
  let outputObj = {};
  for (let key in inputObj) {
    console.log(key+ " : " + inputObj[key])
    // outputObj.push(inputObj[i]);
  }
  return outputObj;
}

//==============================================================================
//======================hashed_Check_Duplicates__[[TEST]]=======================
//==============================================================================

let testHash = {
  flavor: "chocolate",
  time: "noon",
  vehicle: "Ford F150",
  fuel: "Chevron",
  chemical: "epoxy",
  radio: "167.88 MgHz",
  wallet: "money",
  country: "America",
  time: "noon",
  fuel: "Chevron",
  fuel: "Royal Dutch",
  nutrients: "amino acids",
  lunch: "PB&J sandwich"
}

hashObject(testHash);

console.log('==============');

console.log(hash(testHash))

//==============================================================================
