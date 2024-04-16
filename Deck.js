class Deck {
	/*Javascript does not allow class-variables in the sense that I'm not allowed to type:
	var deckName;
	var cards;
	here.
	This will result in an error; however, when I set this.deckName in the constructor(s) below, they are referenced and become part of the Deck class, just like a class variable. Anywhere in this (or outside) this class I am able to call deckName and cards, however, you can't just call "deckName", you must call "this.deckName", "this" being the deck class
	
	Tldr: call this.deckName and this.cards to use them as class variables
	*/
	constructor(deckName, cards) {//Cards should be Card[] object(s)
		this.deckName = deckName;
		this.cards = cards;
	}
	constructor(deckName) {
		this.deckName = deckName;
		cards = [];
	}
	addCard(card) {//Should be Card object
		this.cards.push(card);
	}
}