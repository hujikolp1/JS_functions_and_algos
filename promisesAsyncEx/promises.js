function returnKey1() { return promise(); }
function returnKey2() { return promise(); }
function returnKey3() { return promise(); }

// Make a promise returning a random value after random time.
function promise() {
  return new Promise(resolve => {
    const random = Math.random() * 1000;
    setTimeout(() => resolve(random), random);
  });
}

// Wait for all promises to finish, then construct result.
Promise.all([returnKey1(), returnKey2(), returnKey3()])
  .then(([key1, key2, key3]) => ({key1, key2, key3}))
  .then(console.log);

//===========================================

function returnKey4() { return promise(); }
function returnKey5() { return promise(); }
function returnKey6() { return promise(); }

function promise() {
  return new Promise(resolve => {
    const random = Math.random() * 1000;
    setTimeout(() => resolve(random), random);
  });
}

// Convenience routine to construct an object from arrays of keys and values.
function objectFromKeysAndValues(keys, values) {
  const result = {};
  for (const i = 0; i < keys.length; i++) result[keys[i]] = values[i];
  return result;
}

function promiseAllKeys(promises) {
  return Promise.all(Object.values(promises))
    .then(values => objectFromKeysAndValues(Object.keys(promises), values));
}

promiseAllKeys({key1: returnKey4(), key2: returnKey5(), key3: returnKey6()})
  .then(console.log);

//===========================================

function returnKey7() { return promise(); }
function returnKey8() { return promise(); }
function returnKey9() { return promise(); }

function promise() {
  return new Promise(resolve => {
    const random = Math.random() * 1000;
    setTimeout(() => resolve(random), random);
  });
}

async function makeObject() {
  return {key1: await returnKey7(), key2: await returnKey8(), key3: await returnKey9()};
}

makeObject().then(console.log);
