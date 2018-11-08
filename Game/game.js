// $("#rightbattle").click(function() {
//   console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-")
//   // console.log(player1.indexOf($(this)));
//   console.log($(this))
// });






class game {
    constructor() {
      this.player1 = [];
      this.player2 = [];
     
    }
    
    selectCharacter(characterName, player) {
      return player.filter(character => character.name === characterName);
    }
  
    player1Attack(name1, name2) {
      let selectP1 = this.selectCharacter(name1, this.player1)[0]      

      let selectPlayer1Character = selectP1
      // console.log('heeyeeeeeee',selectPlayer1Character)

      let player2Character = this.selectCharacter(name2, this.player2)[0];
      // console.log(
      //   selectPlayer1Character.name,
      //   " attacks with attc ",
      //   selectPlayer1Character.attc,
      //   "p", player2Character
      // );
      player2Character.receiveDamage(selectPlayer1Character.attack());
  
      if (player2Character.hp < 1) {
        this.player2.splice(player2Character, 1);
      }
    }



    player2Attack(name1, name2) {
      let selectP2 = this.selectCharacter(name2, this.player2)[0]
      console.log(name2, '=-=-=-=-=-=-=-=-=-=-=-')
      
      

      let selectPlayer2Character = selectP2
      // console.log('heeyeeeeeee',selectPlayerCharacter)

      let player1Character = this.selectCharacter(name1, this.player1)[0];
      // console.log(
      //   selectPlayer2Character.name,
      //   " attacks with attc ",
      //   selectPlayer2Character.attc,
      //   "p", player1Character
      // );
      player1Character.receiveDamage(selectPlayer2Character.attack());
  
      if (player1Character.hp < 1) {
        this.player1.splice(player1Character, 1);
      }
    }
  }
  
  class character {
    constructor(name, hp, attc, pic) {
      this.name = name;
      this.hp = hp;
      this.attc = attc;
      this.pic = ('rider.gif');
    
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

  // let palyerIndex = theGame.selectedPlayer1Index 
// console.log(palyerIndex)
  let archer = new character("archer", 100, 20,);
  let warrior = new character("warrior", 100, 40);
  let mage = new character("mage", 100, 85);
  let rogue = new character("rogue", 100, 75);
  let rider = new character("rider", 100, 60);
  
  theGame.player1.push(archer, warrior, mage, rogue, rider);
  
  let hunter = new character("hunter", 100, 20);
  let orc = new character("orc", 100, 40);
  let warlock = new character("warlock", 100, 85);
  let wolf = new character("wolf", 100, 75);
  let centaur = new character("centaur", 100, 60);
  
  theGame.player2.push(hunter, orc, warlock, wolf, centaur);

 
 
  // console.log(theGame.player2);
  
  //  console.log(theGame.selectCharacter("orc", theGame.player2))
  
  console.log("player one array =>", theGame.player1);
  console.log("player two array =>", theGame.player2);
  // let selectP1 = 
  // let selectP2 =
  
  $('#attack1').click(function(){
    let character1 = $("#selectPlayer1").val();
    let character2 = $("#selectPlayer2").val();
 console.log( 'this is  the carachter 2',character2)
    theGame.player1Attack(character1,character2)
      // console.log( theGame.player1Attack(character1,character2))
    });
    $('#attack2').click(function(){
      let character2 = $("#selectP2").val();
      let character1 = $("#selectP1").val();
   console.log( 'this is  the carachter 1',character1, character2)
      theGame.player2Attack(character2,character1)
        // console.log( theGame.player1Attack(character1,character2))
      });
    setInterval(()=>{ 
      let rightDiv = "";
theGame.player1.forEach(character => {
  rightDiv += '<div class="char1" name="' + character.name + '"   style="background: url(./images/'+ character.pic +') no-repeat; background-size: cover">';
  rightDiv += '  <div  name="' + character.name + '"></div>';
  rightDiv += '  <div class="front" ></div>';
  rightDiv += '  <p>"' + character.name + '"</p>';
  rightDiv += "</div>";
  rightDiv += `<progress id='health' value=${
    character.hp
  }  max='100'></progress>`;
});
$("#rightbattle").html(rightDiv);

// console.log('1: ', $("#battle"))

let leftDiv = "";

theGame.player2.forEach(character => {
  leftDiv += '<div class="char2" name="' + character.name + '">';
  leftDiv += '  <div  name="' + character.name + '"></div>';
  leftDiv += ` <div  src="./images/'${character.pic}' no-repeat"></div>`;
  leftDiv += '  <p>"' + character.name + '"</p>';
  leftDiv += "</div>";
  leftDiv += `<progress id='health' value=${
    character.hp
  }  max='100'></progress>`;
});


$("#leftbattle").html(leftDiv);
}, 50);



// let selectPlayerIndex= $(".char1").click(()=>{$(this).index()})

// $(".char1").click(function() {
//  console.log($(this).index())})
//   $( ".char2" ).click(function(){
//     console.log($(this))
  //  theGame.player1Attack("hunter");
  //  theGame


