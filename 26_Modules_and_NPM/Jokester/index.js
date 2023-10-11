const jokes = require("give-me-a-joke"); 
const colors = require('colors');

jokes.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow);
});

var cowsay = require("cowsay");
console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));