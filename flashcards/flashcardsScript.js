/*

I think you should start with just one div, this div will have the Deck.card[0].question and Deck.card[0].answer variables set to it, so then when the div is clicked on, the answer is revealed (Doesn't have to flip or slide for now, can worry about that after functionality is reached). IMPORTANT: The flashcards being used should NOT be randomly chosen. It's ok to randomize the order once, before the user flips any flashcards, but DO NOT randomly chose flashcards the user will be flipping while they go, we want to ensure that the user goes through each card EXACTLY once when they go through one round of the flashcards.

Once they have flipped through all the cards in the deck once, DO NOT automatically start again from the beginning, rather, let the user know somehow (pop-up maybe) that they have finished with the deck of cards, and prompt them if they want to restart, if they do want to restart, it's ok to then start from the beggining.

Once you have gotten the functionality working on the flashcards, make it look nice, i.e add an animation when the user flips a card, make the pop-up look nicer/different, etc.

Feel free to make this as modular as you can, as many different files/classes as you want, as long as it stays in this folder to keep organized. Also don't forget to document EVERY method/variable that doesn't have an obvious purpose or usecase. Also try not to use too many javascript-built-in functions/methods, it just makes it harder for others to read/understand the code, because they have to search up what certain methods do constantly.

LMK if you have ANY problems, I don't have much else to do besides help.


*/

var flash = document.getElementById("flashcard");
flash.addEventListener("click", flipCard);

// - visible/hidden
var currentCard = 0;
var currDeck;
function setFlashCardScreen(activeDeck) {
  //currDeck = activeDeck;
  //console.log(activeDeck.cards[0]);
  var name = document.getElementById("deckName");
  var main = document.getElementById("mainScreen");
  var div = document.getElementById("flashcardsDiv");
  
  
  //hide main, show flashcards div
  main.style.visibility = "hidden";
  div.style.visibility = "visible";
  
  flash.innerHTML = activeDeck.cards[0].question;
  name.innerHTML = activeDeck.deckName; 
}

function flipCard() {
  console.log("jaden");
  if (flash.innerHTML == currDeck.cards[currentCard].answer) {
     flash.innerHTML = currDeck.cards[currentCard].question;
  } else {
    flash.innerHTML = currDeck.cards[currentCard].answer;
  }
}