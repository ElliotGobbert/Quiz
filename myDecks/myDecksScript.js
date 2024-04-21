/*

The logic (AKA functionality) part of this bit is probably the hardest of any of the projects.

I think you should make an array (Maybe 2d array, if they're 2 columns, whatever works) to store the Deck objects. 

The Deck object itself should have everything you need(i.e if its activated, the actual deck/questions themselves, am i forgetting something?), so all you need to do is Throw the info of this deck, i.e the deckName, activated, into div(s), then print those divs onto the screen, making sure that they don't overflow the screen and go off the screen by setting overflow:hidden (I think), then make sure that's scrollabe. 

The div of the deck can be called myDecksHolder, and it should have the info I talked about previously, the actual Deck object (Though of course that isn't visual), and the edit button, which is a seperate button that'll have to have absolute positioning so it can overlap, place that in a corner of the thing, you might have to mess with the z-index property to make sure when you click that it opens the edit page for the deck, instead of activating the deck (There should be an ACTIVATE! button too of course, self-explanatory functionality.) 

Instructions for the myDecksEditingScript.js (If you want to call it that) ----->

*/

/*

When clicking the edit button, it should hide the current myDecksPanel div and show the other div type.

Just like the myDecksPanel, it should be another panel, but for another purpose obviously.

Get all the questions/answers of the Deck object, and print a div onto the screen with the question/answer info on them, make sure its scrollable, overflow:hidden, etc. 

VERY IMPORTANT: To actually edit the question/answer of the cards, make it so that rather than printing out the questions as divs with <p>'s, Make it print a bunch of div's with <input>'s, then set the text to Whatever the question/answer should be, making this much easier to implement (Also much more intuitive). 

Add a delete button to each div as well, just a little button in a corner, absolutely positioned probably, when clicking this, it deletes the entire question, don't forget to not just visually remove it, but also remove it from the Deck object.

Add an add button, little thing in a corner again, this can just add a new question, which should be as simple as adding a new div with "" and "" set as the texts for the inputs in the div

Add a save button. When this is pressed, set all the data of each of the cards in the deck to whatever is currently in the text input boxes for each of the divs. IMPORTANT: The user should NOT be allow to save if there are questions/answers unfilled or empty. Prompt them to fix this before allowing them to save.

Feel free to make this as modular as you can, as many different files/classes as you want, as long as it stays in this folder to keep organized. Also don't forget to document EVERY method/variable that doesn't have an obvious purpose or usecase. Also try not to use too many javascript-built-in functions/methods, it just makes it harder for others to read/understand the code, because they have to search up what certain methods do constantly.

LMK if you have ANY problems, I don't have much else to do besides help.

*/

function newDeck() {
  console.log("Create new deck");
  clearScreen("addButton");
  addScreen("makeQuestions");
}

addButton.addEventListener('click', newDeck);