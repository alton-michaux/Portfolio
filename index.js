//animate twinkling stars


//select footer element
const footer = document.getElementById('quote-marquee');

//store quotes in an object
const quotes = [{
    quote : "Intelligence without ambition is a bird without wings.",
    author: "Salvador Dali"
    },
    {
    quote : "Persistence. Perfection. Patience. Power. Prioritize your passion. It keeps you sane.",
    author: "Criss Jami"
    },
    {
    quote : "It is no measure of health to be well adjusted to a profoundly sick society",
    author: "J. Krishnamurti"
    },
    {
    quote : "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete",
    author: "Buckminster Fuller"
    },
    {
    quote : "The good we secure for ourselves is precarious and uncertain until it is secured for all of us and incorporated into our common life.",
    author: "Jane Addams"
    }
];

//add event listener to footer that makes it rewrite innerHTML 
window.addEventListener('load', () => {
    for (i = 0; i < quotes.length; i++) {
        footer.innerHTML = "";
        setInterval(function(){footer.innerHTML = quotes[0][i];}, 3000);
        console.log(quotes[0][i]);
    }
})
