class Card {
	//Call this.question and this.answer for the class-variables

	//Question/answer->strings, image->Image object; MDN Notes: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
	
	constructor(question = null, answer = null, image = null) {
		this.question = question;
		this.answer = answer;
		this.image = image;
	}
	isCorrect(possibleAnswer) {
		if (possibleAnswer === answer) {
			return true;
		}
		return false;
	}
}