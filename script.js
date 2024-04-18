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
}
flashcardButton.addEventListener('click', goToFlashcards);
function goToLearn() {
	console.log("Going to learn");
}
learnButton.addEventListener('click', goToLearn);
function goToTest() {
	console.log("Going to test");
}
testButton.addEventListener('click', goToTest);
function goToMeteor() {
	console.log("Going to meteor");
}
meteorButton.addEventListener('click', goToMeteor);