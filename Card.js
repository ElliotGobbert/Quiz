class Card {
	//Call this.question and this.answer for the class-variables

	//Question/answer should be strings
	constructor(question, answer) {
		this.question = question;
		this.answer = answer;
	}
	constructor(question) {
		this.question = question;
		this.answer = "";
	}
	constructor(answer) {
		this.answer = answer;
		this.question = "";
	}
	constructor() {
		this.question = "";
		this.answer = "";
	}
	isCorrect(possibleAnswer) {
		if (possibleAnswer === answer) {
			return true;
		}
		return false;
	}
}