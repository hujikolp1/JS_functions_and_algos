( ()=> {
    console.log("I don't get stored in a variable");
})()
  
// OR ES_5

// ( function() {
//     console.log("But yu can still call me after defining me");
// })()
  
let immediatelyInvokedFuncExp = ( ()=>{
    return {
    
      mixinGoWoo: function(obj) {
        obj.goWoo = function() {
          return 'Wooooooooo';
        };
      },
      mixinGoAww: function(obj) {
        obj.goAww = function() {
          return 'Awwwwwww'
        };
      }
      
    }
})() // immediately returns an obj

let sportsFan = {
    name: "Duff Man",
    favoriteTeam: 'Niner\'s'
};

// can use obj as a module to alter other objects 
immediatelyInvokedFuncExp.mixinGoWoo(sportsFan)
console.log(sportsFan.goWoo())