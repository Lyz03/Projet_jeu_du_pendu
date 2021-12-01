const User = {
    input: document.getElementById('letter'),
    submit: document.getElementById('submit')
}

const Words = {
    wordsToFind: ['test', 'autreTest'],

    randomWord: function () {
    const randomNumber = Math.floor(Math.random() * this.wordsToFind.length);
    return this.wordsToFind[randomNumber];
    }
}

let searchWord = Words.randomWord();
let letter;
let goodLetter = false;

User.submit.addEventListener("click", function () {
    if (User.input.value.length === 1) {
        letter = User.input.value;
        User.input.value = '';
        letterInWord();
        console.log(goodLetter);
    }
});

console.log(searchWord);
function letterInWord() {
    if (searchWord.includes(letter)) {
        goodLetter = true;
    }
}