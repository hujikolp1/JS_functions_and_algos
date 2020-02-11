function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (let i = 0; i < 10; i++) console.log(getRandomColor());

console.log("=================================================================")

let randoColo = () => {
  return parseInt('0x' + (function co(lor) {
    return (lor += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
      [Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor);
  })('')
  );
}

for (let i = 0; i < 10; i++) console.log(randoColo());
