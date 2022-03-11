// Create an array of words

const words = ["pikachu", "mario", "link", "marth", "ganondorf"];

// Choose word randomly
let randNum = Math.floor(Math.random() * words.length);
let chosenWord = words[randNum];
let rightWord = [];
let wrongWord = [];

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
document.addEventListener('keypress', (event) => {
    let keyCode = event.keyCode;
    let keyWord = String.fromCharCode(keyCode);
    // Check if guess is right
    if(chosenWord.indexOf(keyWord) > 0) {
        // Add to the right word array
        rightWord.push(keyWord);

        // Replace display with right letter
        display[chosenWord.indexOf(keyWord)] = keyWord;
        docDisplay[0].innerHTML = display.join('');
        docCorrect[0].innerHTML = rightWord.join('');

        // Check to see if user's word matches guesses
        if(display.join('') == chosenWord) {
            alert('You Win!');
        }
    }
    else {
        // Add to the wrong word array
        wrongWord.push(keyWord);
        docIncorrect[0].innerHTML = wrongWord.join('');
    }
});

docDisplay[0].innerHTML = generateDisplays().join(' ');