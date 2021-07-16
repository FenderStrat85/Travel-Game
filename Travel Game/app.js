const {testPlace} = require('./game.js');

process.stdout.write("I'm thinking of a country we've been to before but what to go to again.\nWhere do I want to go?")

let playGame = (userInput) => {
    let input = userInput.toString().trim();
    testPlace(input);
};

process.stdin.on('data', playGame)