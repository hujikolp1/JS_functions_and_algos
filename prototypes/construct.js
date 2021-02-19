function Pig() { }
Pig.prototype.oink = function() { console.log("oink"); };

function Pig() { }

// Only change code below this line

Pig.prototype = Object.create(Pig.prototype)
Pig.prototype.constructor = Pig
Pig.prototype.snort = () => {
    console.log('snonk')
}


let wilbur = new Pig();
wilbur.snort()