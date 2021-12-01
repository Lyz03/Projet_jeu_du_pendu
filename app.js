let user = {
    letter: document.getElementById('letter'),
    submit: document.getElementById('submit')
}

let wordsToFind = ['test', 'autreTest'];
let searchedWord;

console.log(wordsToFind);

function randomWords() {
    const randomNumber = Math.floor(Math.random() * wordsToFind.length);
    return wordsToFind[randomNumber];
}

searchedWord = randomWords();
console.log(searchedWord)