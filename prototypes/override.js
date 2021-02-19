function Vehicle() { }
Vehicle.prototype.move = function() {
  return "vroom vroom vroom";
};
function Plane() { }

Plane.prototype = Object.create(Vehicle.prototype);

Plane.prototype.move = function() {
  return "swshhhhhhh";
};

const airforce1 = new Plane()
console.log(airforce1.move())