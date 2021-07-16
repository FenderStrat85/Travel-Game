let destinations = ['China', 'Japan', 'Taiwan', 'Georgia', 'Uzbekistan', 'Vietnam', 'Cambodia', 'USA', 'Portugal'];

let secretPlace = destinations[Math.floor(Math.random()*destinations.length)];

module.exports = {
    testPlace: (input) => {
        if (input === 'quit') {
            process.stdout.write ('Ok. Bye!\n')
            process.exit();
        }
        if (!destinations.includes(input)) {
            process.stdout.write('Choose from a country Miranda and Richard have been to. \n Is the secret place....')
        } 
        else if (input === secretPlace) {
            process.stdout.write('Woah, you got it. You must be psychic! See you later\n')
            process.exit()
        } 
        else {
            process.stdout.write("Nope, guess again.\nIs the secret place...")
        }
    }
}