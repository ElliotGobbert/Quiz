class Meteor extends Phaser.Scene {
  /*
  I won't be of an incredible amount of help with this one, but I can still give some advice and requirements. 

  Make sure it's completely bug-free, really try to break it when you build this, and make sure it never (or almost never) breaks. 

  Build this with stats in mind, i.e amount of meteors destroyed, amount missed, longest time survived, etc. If we get aronud to making a stats page, it'll be nice to have the numbers available in a snap.

  Make sure the program is robust in its inputs, i.e if the answer is 'me gusta', the program should accept: 
  'mE   GusTA', but not accept; 'megusta'.
      ^notice the extra spaces

  Make sure it resets everything when exiting, refreshing page, pressing the FORFEIT button, etc.

  When done with all the actual functionality of the program, make sure it looks nice and clean (Sound effects maybe?), maybe add some effects when destroying meteors, etc.

  Feel free to make this as modular as you can, as many different files/classes as you want, as long as it stays in this folder to keep organized. Also don't forget to document EVERY method/variable that doesn't have an obvious purpose or use-case. Also try not to use too many javascript-built-in functions/methods, it just makes it harder for others to read/understand the code, because they have to search up what certain methods do constantly.

  Besides that, LMK if you have ANY problems, I'll try my best to help you as much as I can
*/
  
/* if the same term is incorrect for two times, game ends; score remains constant if user gets it wrong
one word on screen each time
game continues until user goes through every word in the deck 
user types in the term looking the meteors of definitions for now

if additional time:
1. add option so that user can choose whether to type in the term or the definition
2. add option so that they can choose whether to play the game with all words or starred ones
*/
  
  constructor() {
    super("bootGame");
    //Card oneC = new Card("a good food that is italian", "pasta");
    //Deck oneD = new Deck("italian food", oneC);
    //this.oneD.cards = cards;
    console.log("hi");
  }
  create() {
    this.scene.start("playGame");
    this.words = [];
    this.incorrect = [];
   
    for (let i = 0; i < this.cards.length; i++) {
      this.words.push(cards[i]);
      console.log(words[i]);
    }
  }
  setWord() {
    word = this.add.text(randomX(), 0, this.words[this.word[0]], { fontFamily: "Boldena"});
  }
  randomX() {
    var randomX = Phaser.Math.Between(0, config.width);
    return randomX;
  }
  randomIndex() {
    var randomIndex = Phaser.Math.Between(0, this.words.length);
    return randomIndex;
  }




  
  checkWord(word, wrong, right) {
    this.wrong = wrong;
    this.right = right;
    var index = this.words.indexOf(word);

    if (document.getElementById("input").value == word) {
      /*
      if user types in the right answer
      1. score goes up (right++)
      2. that word is removed from the array
      3. new word from the array is set as "word"
      4. new word is set on the screen

      if the word reaches the end of the screen
      1. saves that this word is incorrect
      2. popup showing the correct answer 
      3. that word remains in the array, next time it shows up, the meteor will be red
      4. new word from the array is set as "word"
      5. new word is set on the screen

      1. if incorrect of that specific word reaches 2, 
      2. popup showing the correct answer
      3. game ends
      
      */ 
      this.right++;
      this.word.setVisible(false);
      
      this.word = this.add.text(x[0], 0, this.words[this.randomIndex()], { fontFamily: 'Boldena' });
      this.word.setVisible(true);
      this.resetShipPos(word);
    } 
    document.getElementById("input").value = "";
  }
}
