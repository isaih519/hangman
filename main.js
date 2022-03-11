// Create an array of words

const words = ["pikachu", "mario", "link", "marth", "ganondorf", "falco", "fox", "kirby"];

// Choose word randomly
let randNum = Math.floor(Math.random() * words.length);
let chosenWord = words[randNum];
let rightWord = [];
let wrongWord = [];

// Lose condition
let guesses = 6

// Dom Manipulation
let docDisplay = document.getElementsByClassName("display");
let docCorrect = document.getElementsByClassName("correct");
let docIncorrect = document.getElementsByClassName("incorrect");

// Testing
// Create display based on length of word
let display = [];
let generateDisplays = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        if(chosenWord[i] != ' ') {
            display.push('_');
            //docDisplay[0].innerHTML = display.join(' ');
        }
        else {
            display.push(' ');
        }
    }
    return display;
}
// Get user's guess
let userKey = document.addEventListener('keypress', (event) => {
    let keyCode = event.keyCode;
    let keyWord = String.fromCharCode(keyCode);
    // Check if guess is right
    for (i=0; i > words.length; i++) {
        if(chosenWord.indexOf(keyWord) >= 0) {
            // Add to the right word array
            rightWord.push(keyWord);

            // Replace display with right letter
            display[chosenWord.indexOf(keyWord)] = keyWord;
            docDisplay[0].innerHTML = display.join('');
            docCorrect[0].innerHTML = rightWord.join('');

            // Check to see if user's word matches guesses
            if(display.join('') == chosenWord) {
                docCorrect[words.length-1] = rightWord.join('');
                alert('You Win!');
                break;
            }
        }
        else {
            // Add to the wrong word array
            wrongWord.push(keyWord);
            docIncorrect[0].innerHTML = wrongWord.join('');
            guesses -= 1;
            if (guesses !== 0) {
                alert(`You have ${guesses} chances left.`)
            } else {
                keyUser.remoteEventListener('click', event)
                alert('You lost!');
                break;
            } 
        }
    }
});

docDisplay[0].innerHTML = generateDisplays().join(' ');