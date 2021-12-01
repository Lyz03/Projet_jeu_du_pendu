const User = {
    input: document.getElementById('letter'),
    submit: document.getElementById('submit'),
    userGuesses: document.getElementById('user_guesses')
}

const Words = {
    wordsToFind: ['test', 'autreTest'],

    randomWord: function () {
    const randomNumber = Math.floor(Math.random() * this.wordsToFind.length);
    return this.wordsToFind[randomNumber];
    }
}

let searchWord = Words.randomWord().split('');
let letter;
let goodLetter = false;
let alreadyWrite = [];

/*
 * what to do with the user guesses
 */
User.submit.addEventListener("click", function () {
    if (User.input.value.length === 1) {
        letter = User.input.value;
        if (alreadyWrite.includes(letter)) {
            console.log('deja utiliser')
        } else {
            User.input.value = '';
            letterInWord();
            console.log(goodLetter);
            console.log(alreadyWrite);
        }
        alreadyWrite.push(letter);
    }
});

console.log(searchWord);

/*
 * if the word include the letter then set goodLetter to true
 */
function letterInWord() {
    goodLetter = searchWord.includes(letter);

    if (goodLetter) {

    }
}