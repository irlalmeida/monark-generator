var quotes = [
    "Não existe liberdade de expressão no Brasil.",
    "Parado você cometeu um crime de opinião.",
    "A sensação que eu tenho é que o brasileiro não entende o que é liberdade, mas faz sentido, como conhecer aquilo sem nunca ter vivenciado.",
    "Opinião racista é crime?",
    "Eu acho que o nazista tinha que ter o partido nazista reconhecido pela lei"
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
