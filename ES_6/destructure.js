const sum = (...args) => {
  // const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

//==============================

const user = {
    johnDoe: { 
      age: 34,
      email: 'guy@someip.com'
    }
  };

  const johnDoe = user;
  console.log(johnDoe)

//==============================

  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today} = HIGH_TEMPERATURES;
  const {tomorrow} = HIGH_TEMPERATURES;
  
//==============================

  const HIGH_TEMPERATURES_2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
      
  const {today:highToday} = HIGH_TEMPERATURES_2;
  const {tomorrow:highTomorrow} = HIGH_TEMPERATURES_2; 
  
//==============================

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
const {today:{low:lowToday2,high:highToday2}} = LOCAL_FORECAST;

console.log("lowToday2: ", lowToday2)
console.log("highToday2: ", highToday2)

//==============================

let a = 8, b = 6;
// destructuring SWAP
[a,b]=[b,a]

//==============================

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a,b,...arr]=list; // Change this line
  return arr;
}
const arr = removeFirstTwo(source);

//==============================

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max,min}) => (max + min) / 2.0; 
console.log("half: ", half(stats))

//==============================

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {

  const failureItems = [];
  for (let key in arr){
    console.log("arr[key]: ", arr[key])
    failureItems.push(
      `<li class="text-warning">${arr[key]}</li>`
    )
  }
  console.log("failureItems: ", failureItems)
  return failureItems;
}

const failuresList = makeList(result.failure);

//==============================

const createPerson = (name, age, gender) => (
  { name, age, gender }
);
let bob = createPerson("bob",27,"M");
console.log("bob -> ", bob)
// same as
const createPersonOld = (name, age, gender) => (
  { name:name, age:age, gender:gender }
);
let oldBob = createPersonOld("bob",27,"M")
console.log("oldBob -> ", oldBob)

//==============================



