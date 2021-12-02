const User = {
    input: document.getElementById('letter'),
    submit: document.getElementById('submit'),
    userGuesses: document.getElementById('user_guesses')
}

const Words = {
    wordsToFind: [
        'carreau',
        'chaise',
        'couloir',
        'dossier',
        'sortie',
        'table',
        'tabouret',
        'present',
        'gauche',
        'droite',
        'debout',
        'coloriage',
        'rayure',
        'pinceau'
    ],

    randomWord: function () {
    const randomNumber = Math.floor(Math.random() * this.wordsToFind.length);
    return this.wordsToFind[randomNumber];
    }
}

const divButtons = document.getElementById('buttons');
const remainingChancesP = document.getElementById('remaining_chances');
const image = document.querySelector('.images img');
const winLoseP = document.getElementById('winLose');
const resetButton = document.getElementById('reset');

let searchWord = Words.randomWord().split('');
let letter;
let goodLetter = false;
let goodLetterGuessed = 0;
let alreadyWrite = [];
let remainingChances = 6

remainingChancesP.innerText = remainingChances.toString();

// creat buttons
function createButtons() {
    for (let i = 0; i < searchWord.length; i++) {
        let button = document.createElement('button');
        button.id = 'id' + i;
        divButtons.appendChild(button);
    }
}

createButtons();
/*
 * what to do with the user guesses
 */
User.submit.addEventListener("click", function () {
    if (remainingChances === 0) {
        winLoseP.innerText = "Perdu ! le mot été : " +searchWord.join('');
        resetButton.style.display = 'block'
        resetButton.addEventListener("click", function () {
            resetGame()
            remainingChances = 6;
            resetButton.style.display = 'none'
        });
    } else if (User.input.value.length === 1) {
        letter = User.input.value;
        if (alreadyWrite.includes(letter)) {
            winLoseP.innerText = 'Lettre déjà utilisée';
        } else {
            winLoseP.innerText = '';
            User.input.value = '';
            letterInWord();
        }
        winCondition()
        alreadyWrite.push(letter);
    }
});


/*
 * if the word include the letter then set goodLetter to true
 */
function letterInWord() {
    goodLetter = searchWord.includes(letter);

    if (goodLetter) {
        for (let i = 0; i < searchWord.length; i++) {
            if (searchWord[i] === letter) {
                let id = 'id' + i;
                document.getElementById(id).innerText = letter;
                goodLetterGuessed++;
            }
        }
    } else {
        remainingChances -= 1;
        remainingChancesP.innerText = remainingChances.toString();
        changeImage();
    }
}

/*
* Change the image to matche the nb of remaining chances
 */
function changeImage() {
    switch (remainingChances) {
        case 5:
            image.src = "/images/two.jpg";
            break
        case 4:
            image.src = "/images/tree.jpg";
            break
        case 3:
            image.src = "/images/four.jpg";
            break
        case 2:
            image.src = "/images/five.jpg";
            break
        case 1:
            image.src = "/images/six.jpg";
            break
        case 0:
            image.src = "/images/seven.jpg";
            break
    }
}

/*
* if the user win, disable the submit and run the reset function
 */
function winCondition() {
    if (goodLetterGuessed === searchWord.length) {
        winLoseP.innerText = "Bravo ! Vous avez trouvé le mot !"
        document.querySelector('input[type="submit"]').style.display = 'none';
        resetButton.style.display = 'block'
        resetButton.addEventListener("click", function () {
            resetGame();
            resetButton.style.display = 'none'
        });
    }
}

/*
* reset the game
 */
function resetGame() {
    image.src = "/images/one.jpg"
    remainingChances = 6;
    remainingChancesP.innerText = remainingChances.toString();
    User.input.value = '';
    alreadyWrite = [];
    goodLetter = false;
    goodLetterGuessed = 0;
    winLoseP.innerText = '';
    document.querySelector('input[type="submit"]').style.display = 'inline';
    for (let i = 0; i < searchWord.length; i++) {
        let id = 'id' + i;
        divButtons.removeChild(document.getElementById(id))
    }
    searchWord = Words.randomWord().split('');
    createButtons();
}