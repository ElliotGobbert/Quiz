/*

Have the user fill out a little form with how many of each type of question they want, and if they want ONLY e.g english-spanish or vice versa. 

Then I think you should make 4 array of divs, one for each type of question:
writingQuestions[], multipleChoiceQuestions[], then vice versa but in the opposite direction
(as in, english-spanish now spanish-english). The array itself wouldn't be divs, it could be anything you want, but when you print that to the screen, create it as div(s) one after the other. Make sure the area in which the divs are placed is scrollable, and set overflow:hidden (I think) so that it doesn't just paste everything all the way beyond the screen.
If a question has 0 of its type, then so be it, point is it'll be nice because you won't have to create the arrays, they can be hard-coded in (Should be nice for testing)

if(questiontype=writing) {
	make the div accept a string as the answer
} else if (questiontype=multiplechoice) {
	make the div accept one of four random answers from the deck as an answer
}

When the test is filled out, have a button at the button to submit the test, and evaluate the score, should be easy, use the isCorrect() method in Deck and Card, read the documentation for how exactly they work.

When done with all this (The functionality part), focus on making it look nice, get nice spacing between each div, make the fonts look all nice and clean, good color palettes, resets after every use, etc.

Build this with stats in mind, i.e make a stat counter for how many questions they got right/wrong, percents, speed, etc. You don't have to do anything with them just yet, but if we do get around to making a stats page it'll be nice to have the numbers available in a snap

Feel free to make this as modular as you can, as many different files/classes as you want, as long as it stays in this folder to keep organized. Also don't forget to document EVERY method/variable that doesn't have an obvious purpose or usecase. Also try not to use too many javascript-built-in functions/methods, it just makes it harder for others to read/understand the code, because they have to search up what certain methods do constantly.

LMK if you have ANY problems, I don't have much else to do besides help.

*/
function startTest() {
  optionsDiv.style.visibility = "hidden";
  questionDiv.style.visibility = "visible";
}
startTestButton.addEventListener("click", startTest);