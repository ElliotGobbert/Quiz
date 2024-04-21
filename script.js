//There are no data types in javascript, most of the time, however, it'll be pretty self-explanatory what data type to use for each variable, but if it isn't, make sure to notify everyone
var username;
var password;
var userId;
var activeDeck; //Should be a Deck object


function goToHome() {
	console.log("Going to home");
}
quizlitButton.addEventListener('click', goToHome);

function goToMyDecks() {
	console.log("Going to my decks");
	clearScreen('mainScreen');
	clearScreen('adPanel');
	addScreen('myDecksScreen');
}
addDeckButton.addEventListener('click', goToMyDecks);
myDecksButton.addEventListener('click', goToMyDecks);

function goToProfile() {
	console.log("Going to profile");
}
settingsButton.addEventListener('click', goToProfile);
accountButton.addEventListener('click', goToProfile);
supportButton.addEventListener('click', goToProfile);

function goToFlashcards() {
	console.log("Going to flashcards");
	console.log(activeDeck);
	setFlashCardScreen(activeDeck);
}
flashcardButton.addEventListener('click', goToFlashcards);

function goToLearn() {
	console.log("Going to learn");
}
learnButton.addEventListener('click', goToLearn);

function goToTest() {
	console.log("Going to test");
	mainScreen.style.visibility = "hidden";
	optionsDiv.style.visibility = "visible";
}
testButton.addEventListener('click', goToTest);

function goToMeteor() {
	console.log("Going to meteor");
}
meteorButton.addEventListener('click', goToMeteor);


function clearScreen(elementID) {
	var div = document.getElementById(elementID);
	div.style.visibility = "hidden";
}

function addScreen(elementID) {
	var div = document.getElementById(elementID);
	div.style.visibility = "visible";
}


//Creates a deck with some strings as an example Deck (nothing is randomized), with a set amount of cards the deck will hold
function createTestingDeck(amountOfCards, print = false, returns = false) {//AmountofCards->int, print->boolean, returns->boolean
	//Print is just whether or not you want to print the deck after creating it, set to not-print as default
	//Returns is whether or not you want to return the deck after creating it, set to not-return as default
	var exampleDeck = new Deck("ExampleDeck");
	for (let card = 0; card < amountOfCards; card++) {
		exampleDeck.cards.push(new Card("Random Question " + card, "Random Answer " + card));
	}
	if (print == true) {
		for (let card = 0; card < exampleDeck.cards.length; card++) {
			console.log(exampleDeck.cards[card]);
		}
	}
	if (returns == true) {
		return exampleDeck;
	}
}

activeDeck = createTestingDeck(10, false, true);
console.log(activeDeck);