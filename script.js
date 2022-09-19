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

//////////////////////Capture div/////////////////////////

function download(url) {
    var a = $("<a style='display:none' id='js-downloder'>")
        .attr("href", url)
        .attr("download", "quote.png")
        .appendTo("body");

    a[0].click();

    a.remove();
}

function saveCapture(element) {
    html2canvas(element).then(function (canvas) {
        download(canvas.toDataURL("image/png"));
    })
}

$('#btnDownload').click(function () {
    var element = document.querySelector("#capture");
    saveCapture(element)
})