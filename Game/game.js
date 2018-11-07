class game {
    constructor() {
      this.player1 = [];
      this.player2 = [];
    }
    selectCharacter(characterName, player) {
      return player.filter(character => character.name === characterName);
    }
  
    player1Attack(name) {
      let randomPlayer1Index = Math.floor(Math.random() * this.player1.length);
      let randomPlayer1Character = this.player1[randomPlayer1Index];
      let player2Character = this.selectCharacter(name, this.player2)[0];
      console.log(
        randomPlayer1Character.name,
        " attacks with attc ",
        randomPlayer1Character.attc
      );
      player2Character.receiveDamage(randomPlayer1Character.attack());
  
      if (player2Character.hp < 1) {
        this.player2.splice(player2Character, 1);
      }
    }
    player2Attack(name) {
      let randomPlayer2Index = Math.floor(Math.random()* this.player2.length)
        let randomPlayer2Character = this.player2[randomPlayer2Index]
        let player1Character = this.selectCharacter(name, this.player1)[0]
        console.log(randomPlayer2Character.name, " attacks with attc ", randomPlayer2Character.attc)
        player1Character.receiveDamage(randomPlayer2Character.attack())
        
        if(player1Character.hp < 1){
            this.player1.splice(selectPlarer1Index, 1)
        }
    }
  }
  
  class character {
    constructor(name, hp, attc) {
      this.name = name;
      this.hp = hp;
      this.attc = attc;
      this.pic = "./images/File_Cleric_archer_ehlonna.jpg";
    
    }
    attack() {
      return this.attc;
    }
    receiveDamage(damage) {
      this.hp -= damage;
      if (this.hp > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else if (this.hp <= 0) {
        return `${this.name}has died in act of combat`;
      }
    }
  }
  let theGame = new game();
  let archer = new character("archer", 100, 20);
  let warrior = new character("warrior", 100, 40);
  let mage = new character("mage", 100, 85);
  let rogue = new character("rogue", 100, 75);
  let rider = new character("rider", 100, 60);
  
  theGame.player1.push(archer, warrior, mage, rogue, rider);
  
  let hunter = new character("hunter", 100, 20);
  let orc = new character("orc", 100, 40);
  let warlock = new character("warlock", 100, 85);
  let goblin = new character("goblin", 100, 75);
  let centaur = new character("centaur", 100, 60);
  
  theGame.player2.push(hunter, orc, warlock, goblin, centaur);

  theGame.player2Attack("warrior");
 
  console.log(theGame.player2);
  
  //  console.log(theGame.selectCharacter("orc", theGame.player2))
  
  console.log("player one array =>", theGame.player1);
  console.log("player two array =>", theGame.player2);
  
  let rightDiv = "";

theGame.player1.forEach(character => {
  rightDiv += '<div class="char1" data-char-name="' + character.name + '">';
  rightDiv += '  <div  name="' + character.name + '"></div>';
  rightDiv += ` <div  src="./images/'${character.pic}' no-repeat"></div>`;
  rightDiv += "</div>";
  rightDiv += `<progress id='health' value=${
    character.hp
  }  max='100'></progress>`;
});
$("#battle").html(rightDiv);

let leftDiv = "";

theGame.player2.forEach(character => {
  leftDiv += '<div class="char2" data-char-name="' + character.name + '">';
  leftDiv += '  <div  name="' + character.name + '"></div>';
  leftDiv += ` <div  src="./images/'${character.pic}' no-repeat"></div>`;
  leftDiv += "</div>";
  leftDiv += `<progress id='health' value=${
    character.hp
  }  max='100'></progress>`;
});

$("#battle").html(leftDiv);