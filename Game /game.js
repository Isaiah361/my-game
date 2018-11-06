class game{
    constructor(){
        this.player1 = [];
        this.player2 = [];
        
    } 
}

class character{
    constructor(hp,attc){
       this.hp = hp;
       this.attc = attc;
       this.attcRange = 0;
        // targeting 

    }
    attack(){
        return this.attc
    }
    receiveDamage(damage){
        this.hp -= damage
        if (this.health > 0 ){
        return `has received ${damage} points of damage`
        }
        return `has died in act of combat`
    }
    

}console.log(character.attack)
let theGame = new game
let archer = new character (100, 20, 10,  ) 
let warrior = new character (125, 40, 1, )
let mage = new character (40, 85, 10, )
let rogue = new character (50, 75, 1, )
let rider = new character (150, 60, 1, )

theGame.player1.push(archer,warrior,mage,rogue,rider)
console.log(theGame.player1)

let hunter = new character (100, 20, 10,  ) 
let orc = new character (125, 40, 1, )
let warlock = new character (40, 85, 10, )
let goblin = new character (50, 75, 1, )
let centaur = new character (150, 60, 1, )

theGame.player2.push(hunter,orc,warlock,goblin,centaur)
console.log(theGame.player2)






class board {
 constructor(){
     this.actualboard = [
     ["tree", "null", "null", "tree", "tree", "tree", "null", "null", "null", "tree"],
     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "nulll"],
     ["null", "null", "null", "null", "null", "null", "null", "null", "nulll", "null"],
     ["null", "rock", "null", "null", "null", "null", "null", "null", "null", "null"],
     ["null", "rock", "null", "null", "tree", "null", "null", "null", "null", "null"],
     ["null", "null", "null", "null", "nill", "null", "null", "null", "rock", "null"],
     ["null", "null", "null", "null", "null", "null", "null", "null", "rock", "null"],
     ["null", "null", "null", "null", "null", "null", "null", "rock", "null", "null"],
     ["null", "rock", "null", "null", "null", "null", "null", "null", "null", "null"],
     ["tree", "null", "null", "null", "null", "null", "null", "null", "null", "tree"]
  ];
  this.movement = [];

  }
  clickCharacter(){
      
  }
  soldierTileMaker() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "malearcher.png");
    x.setAttribute("class", "hero");
    x.setAttribute("width", "45px");
    x.setAttribute("height", "45px");
    x.setAttribute("alt", "dirt tile");
    return (x);
    }
  
  
  
}