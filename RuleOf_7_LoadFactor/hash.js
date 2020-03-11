//==============================================================================
/*
Similar to checkDuplicates.js in repo, except JS objects (or hash tables) are
used
NOTE: npm has module 'object-hash'
To utilize that:
let hash = require('object-hash');
*/
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
  console.log("No duplicates: ");
  return false;
}

//==============================================================================
//===============================hashKey========================================
//==============================================================================
/*
----- Hashes letters into numbers using alpha-numeric correspondence
----- The sum of the hashed letters are the hash key
*/

function hashKey(inputKey) {
  let outputKey = 0;
  let hashMap = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12,
    m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23,
    x: 24, y: 25, z: 26
  }
  for (let i = 0; i < inputKey.length; i++) {
    outputKey += hashMap[inputKey[i]];
  }
  return outputKey;
}

//==============================================================================
//=================================hashObj======================================
//==============================================================================

function hashObject(inputObj) {
  let outputArr = [];
  console.log("first ", outputArr.length)
  for (let key in inputObj) {
    console.log(hashKey(key));
    outputArr.splice(hashKey(key), 0, inputObj[key]);
    console.log("inside ", outputArr.length)
  }
  console.log("Your hashed array is ready. ");
  return outputArr;
}

//==============================================================================
//============================hash__[[TEST]]====================================
//==============================================================================

let testHash = {
  flavor: "chocolate",
  person: "individual",
  species: "hominid",
  food: "ham sandwich",
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
  lunch: "PB&J sandwich",
  time: "3:43 PM",
  fuel: "untreated biodiesel",
  weather: "overcast",
  vehicle: "Honda Civic 2007",
  flavor: "salty",
  country: "Netherlands",
  clothing: "T shirt",
  clothing: "jeans",
  clothing: "sweater",
  chemical: "hydrogen peroxide",
  country: "Peru",
  country: "Japan",
  fuel: "leaded gasoline",
  flavor: "chili",
  radio: "HAM",
  modulation: "amplitude",
  material: "plaster",
  chemical: "calcium carbonate",
  element: "lead"
};

//==============================================================================

function logUniques(inputObj) {
  for (let item in inputObj) {
    console.log(item + " : " + inputObj[item]);
  }
  return 1;
}

//==============================================================================

function logEvery(inputObj) {
  for (let i in inputObj) {
    if (inputObj[i] == undefined) {
      console.log(i + " : " + undefined)
    }
    else {
      console.log(i + " : " + inputObj[i])
    }
  }
  return 1;
}

//==============================================================================

console.log('==============');

let testHashArr = hashObject(testHash);
//logUniques(testHashArr);
// logEvery(testHashArr);
logEvery(testHash);

console.log('==============');

//==============================================================================
