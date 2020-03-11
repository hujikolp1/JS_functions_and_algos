//==============================================================================
/*
Simple hashing functions including checkIfExists
*/

//==============================================================================

//==============================================================================
//============================logging functions=================================
//==============================================================================

const util = require('util');
// To console.log an enite array set maxArrayLength to null as below
// console.log(util.inspect(yourArray, {maxArrayLength: null}));

function logObjUniques(inputObj) {
  for (let item in inputObj) {
    console.log(item + " : " + inputObj[item]);
  }
  return 1;
}

function logObj(inputObj) {
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

function logArrEvery(inputArr) {
  console.log(util.inspect(inputArr, {maxArrayLength: null}));
  return 1;
}

//==============================================================================
//===============================searchHash=====================================
//==============================================================================

const readline = require("readline");

function searchHash() {
  let found = false;
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  console.log("Enter the string to search for: ");
  rl.question("...waiting for stdin...enter key...", function(searchString) {
      console.log(`Looking for key \'${searchString}\' in hashed array...`);
      let hashedSearch = hashKey(searchString);
      if (testHashArr[hashedSearch] === undefined) {
        console.log("Search failure");
      }
      else if (testHashArr[hashedSearch] !== undefined) {
        console.log("Search success");
        console.log("Value: ", testHash[searchString]);
      }
      else {
        console.error("Error while searching.");
      }
      rl.close();
  });
  rl.on("close", function() {
      console.log("Ending process");
      return found;
      process.exit(0);
  });
}

//==============================================================================
//===============================hashKey========================================
//==============================================================================
/*
Hashes letters into numbers using alpha-numeric correspondence:
a -> 1, b -> 2, c -> 3, etc.
The sum of the hashed letters are the hash key.
This formula does not prevent collisions.
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
  let outputArr = new Array(100).fill(undefined);
  for (let key in inputObj) {
    if (outputArr[hashKey(key)] != undefined) {
      console.log("Collision occured at: ", hashKey(key), " -> Overwriting");
      outputArr.splice(hashKey(key), 1, inputObj[key]);
    }
    else if (outputArr[hashKey(key)] == undefined) {
      console.log("Inserting into: ", hashKey(key));
      outputArr.splice(hashKey(key), 1, inputObj[key]);
    }
    else {
      console.error("Error at index: ", hashKey(key));
    }
  }
  console.log("Your hashed array is ready.");
  return outputArr;
}

//==============================================================================
//===============================test__data=====================================
//==============================================================================

let testCollisions = {
  flavor: "chocolate",
  aaaaaa: "hi",
  cba: "wow",
  abc: "abc",
  bbb: "ok",
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
  cba: "abc backwards",
  country: "Japan",
  fuel: "leaded gasoline",
  flavor: "chili",
  radio: "HAM",
  modulation: "amplitude",
  material: "plaster",
  chemical: "calcium carbonate",
  element: "lead",
};

let testHash = {
  aaa: "yes",
  cccc: "twelve",
  shd: "maybe",
  kjv: "try",
  iyf: "when",
  ff: "alsotwelve",
};

//==============================================================================

console.log('==============');

let testHashArr = hashObject(testHash);
console.log("Object: ");
logArrEvery(testHash);
searchHash();

console.log('==============');

//==============================================================================
