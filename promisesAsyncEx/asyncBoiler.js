async function f1() {
  var x = await fetchPages();

}

f1();

async function f2() {
  const thenable = {
    then: function(resolve, _reject) {
      resolve('resolved!')
    }
  };
  console.log(await thenable); // resolved!
}

f2();

async function f3() {
  var y = await 20;
  console.log(y); // 20
}

f3();

async function f4() {
  try {
    var z = await Promise.reject(30);
  } catch(e) {
    console.error(e); // 30
  }
}

f4();

var response = await promisedFunction().catch((err) => { console.error(err); });
console.log(response)