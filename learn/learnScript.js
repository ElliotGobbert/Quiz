let mainDiv = document.getElementById("homepage");
//LearnPanel is appended to mainDiv (center of screen) and houses all HTML elements
let learnPanel = document.createElement("div");
learnPanel.innerHTML=`
<div id="cardDiv">
	<div id="cardDiv">
		<div id="promptDiv">
		
		</div>
	</div>
</div>
`;

/*Learn DOM
div mainDiv
	div cardDiv
		div promptDiv
			p question
		div imageDiv
			img image
		div answersDiv
			button topLeft
			button topRight
			button bottomLeft
			button bottomRight
*/

//Starts script; Adds elements to center of screen
function loadLearn(){
		mainDiv.appendChild(learnPanel);
	//BIZ
}
function generateCard(){
	
}
function getNextCard(){
	
}
function shuffleDeck(){
	
}
function leaveLearn(){
	
}
/*

You have an interestingly challenging task ahead of you for this project. 

I reccomend you make ONE div, this div will have the currentQuestion/currentAnswer on it, as well as some random answers of other questions, as the incorrent answers.


(Questions mastery quick-guide)-->
The first time the user sees a question, it'll be multiple choice, if they get that right then it becomes partially masted, otherwise it remains a completely unanswered question.
The second time the user sees the same question, assuming they got it right the first time, they should be given a written prompt (Not multiple choice), if they get this wrong, the question becomes a partially mastered question, and the user will next time be prompted with multiple choice again for that question.
When the get the written response of the question correct, it becomes a mastered question, and will not be prompted to the user anymore, written or otherwise.

You should have an array of all the completely unanswered questions in the deck, then you should have an an array of partially mastered questions, in which the user has answered them correctly once before,  then you should also have an array of masteredQuestions (Mastered questions will not be prompted to the user again.)

The program should randomly choose from both the completely answered questions, and partially answered questions, assuming none of their sizes == 0. Make sure to move the position of each question in between the arrays once they answer the question, correct or incorrect, up or down. When they have completed 20 questions (Or all questions in the deck), correct or otherwise, the round is over, and you will report back to them how many questions became partially mastered, mastered, how many moved down, became mastered, etc.

Once all questions have been mastered, make a little congratulations screen for the user, and also make a little restart button. 

Once all this is done(The functionality part), work on making it look nice, add a little animation after answer each question right/wrong, little animation when completing the deck, etc.

Feel free to make this as modular as you can, as many different files/classes as you want, as long as it stays in this folder to keep organized. Also don't forget to document EVERY method/variable that doesn't have an obvious purpose or use-case. Also try not to use too many javascript-built-in functions/methods, it just makes it harder for others to read/understand the code, because they have to search up what certain methods do constantly.


LMK if you have ANY problems, I don't have much else to do besides help people


*/


