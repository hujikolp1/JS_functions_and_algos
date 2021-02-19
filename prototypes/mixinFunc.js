let cat = {
    name: "Mr. Bigglesworth",
    personality: 'devious'
  };
  
  let dog = {
    name: "pongo",
    personality: "loyal"
  };
    
  const addMixinEat = (obj) => {
    obj.eat = () => {
      console.log('om nom nom')
    }
  }
  
  addMixinEat(cat)
  addMixinEat(dog)

  dog.eat()
  cat.eat()