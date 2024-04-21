class Deck {
	/*Javascript does not allow class-variables in the sense that I'm not allowed to type:
	var deckName;
	var cards;
	here.
	This will result in an error; however, when I set this.deckName in the constructor(s) below, they are referenced and become part of the Deck class, just like a class variable. Anywhere in this (or outside) this class I am able to call deckName and cards, however, you can't just call "deckName", you must call "this.deckName", "this" being the deck class
	
	Tldr: call this.deckName and this.cards to use them as class variables
	*/
	constructor(deckName = null, cards = []) {//Deckname --> String, Cards --> Card[] object
		this.deckName = deckName;
		this.cards = cards;
		this.activated = false;
	}
	//Adds a card to the end of the card array
	addCard(card) {//Card --> Card object
		this.cards.push(card);
	}
	//Adds a card at a certain index in the card array
	addCard(card, index) {//Card --> Card object, Index --> Int
		this.cards.splice(index, 0, card);
	}
	//Removes card based on the index
	removeCard(index) {//Index --> Int
		this.cards.splice(index, 1);
	}
	//Removes card based on the question
	removeCard(question) {//Question --> String
		for (let index = 0; index < this.cards.length; index++) {
			if (question === cards[index].question) {
				this.cards.splice(index, 1);
			}
		}
	}
	//Removes card based on the answer
	removeCard(answer) {//Answer --> String
		for (let index = 0; index < this.cards.length; index++) {
			if (answer === cards[index].answer) {
				this.cards.splice(index, 1);
			}
		}
	}
}