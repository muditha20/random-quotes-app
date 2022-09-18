let quote = document.getElementById("quote")
let author = document.getElementById("author") ;

const url = "https://type.fit/api/quotes";

let min = 0;
let max = 1600;


let getQuote = () => {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    let randomNo = getRndInteger(min,max)
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        quoteText = item[randomNo]
        console.log(quoteText)
        quote.innerText = quoteText.text;
        author.innerText = "- " + quoteText.author + " -";
    })
};

window.addEventListener('load',getQuote);