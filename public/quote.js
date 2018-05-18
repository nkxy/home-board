class Quote {
	constructor(quote, author) {
		this.quote = quote;
		this.author = author;
	}
}

const QuoteArray = [new Quote("You may delay, but time will not, and lost time is never found again.","-Benjamin Franklin"),
new Quote("Things may come to those who wait, but only the things left by those who hustle.","-Abraham Lincoln")];

function randomQuote() {
	var max = QuoteArray.length;
	var index = Math.floor(Math.random() * max);
	var selectedQuote = QuoteArray[index];
	console.log(selectedQuote.quote);
	console.log(selectedQuote.author);
	return selectedQuote;
}

function addQuote() {
	const selectedQuote = randomQuote();
	document.getElementById("quote").innerHTML = selectedQuote.quote;
	document.getElementById("author").innerHTML = selectedQuote.author;
}

addQuote();
console.log("added Quote")
