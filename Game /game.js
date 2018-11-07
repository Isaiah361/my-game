class game{
    constructor(){
        this.player1 = [];
        this.player2 = [];
        
    } 
    selectCharacter(characterName, player){
      return player.filter(character => character.name === characterName)
    }

    player1Attack(name){
        let randomPlayer1Index = Math.floor(Math.random()* this.player1.length)
        let randomPlayer1Character = this.player1[randomPlayer1Index]
        let player2Character = this.selectCharacter(name, this.player2)[0]
        console.log(randomPlayer1Character.name, " attacks with attc ", randomPlayer1Character.attc)
        player2Character.receiveDamage(randomPlayer1Character.attack())
        
        if(player2Character.hp < 1){
            this.player2.splice(selectPlarer2Index, 1)
        }

     
    }
    player2Attack(){
        let randomPlayer2Index = Math.floor(Math.random()* this.player1.length)
        let randomPlayer2Character = this.player2[randomPlayer2Index]
        let player1Character = this.selectCharacter(name, this.player1)[0]
        console.log(randomPlayer1Character.name, " attacks with attc ", randomPlayer2Character.attc)
        player1Character.receiveDamage(randomPlayer2Character.attack())
        
        if(player1Character.hp < 1){
            this.player1.splice(selectPlarer1Index, 1)
        }

  
    }
    
}

class character{
    constructor(name, hp, attc){
        this.name = name
       this.hp = hp;
       this.attc = attc;
    //    this.attcRange = 0;
        // targeting 

    }
    attack(){
        return this.attc
    }
    receiveDamage(damage){
        this.hp -= damage
        if (this.hp > 0 ){
        return `${this.name} has received ${damage} points of damage`
        } else if (this.hp <= 0){
        return `${this.name}has died in act of combat`
        }
    }

    

}
let theGame = new game
let archer = new character ("archer", 100, 20) 
let warrior = new character ("warrior", 125, 40)
let mage = new character ("mage", 40, 85)
let rogue = new character ("rogue", 50, 75)
let rider = new character ("rider", 150, 60)

theGame.player1.push(archer,warrior,mage,rogue,rider)


let hunter = new character ("hunter", 100, 20) 
let orc = new character ("orc", 125, 40)
let warlock = new character ("warlock", 40, 85)
let goblin = new character ("goblin", 50, 75)
let centaur = new character ("centaur", 150, 60)

theGame.player2.push(hunter,orc,warlock,goblin,centaur)
// console.log(theGame.player2)


// console.log(theGame.player1)
// console.log(theGame.player2)

theGame.player1Attack("warlock")
// console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
// // console.log(theGame.player1)
 console.log(theGame.player2)

//  console.log(theGame.selectCharacter("orc", theGame.player2))




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