function hideElement(element) {
    const selectId = document.getElementById(element);
    selectId.classList.add('hidden');
}

function showElement(element) {
    const selectId = document.getElementById(element);
    selectId.classList.remove('hidden');
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetCollection = alphabetString.split('');
    const randomNumber = Math.floor(Math.random() * alphabetCollection.length);
    const alphabet = alphabetCollection[randomNumber];
    return alphabet;
}

function playGround(alphabet) {
    const playGroundAlphabet = document.getElementById('play-ground-alphabet');
    playGroundAlphabet.innerText = alphabet;

    const highlightedAlphabets = document.querySelectorAll('.highlighted-alphabet');
    highlightedAlphabets.forEach(element => {
        element.classList.remove('bg-yellow-700', 'text-white');
    });

    const newHighlightedAlphabet = document.getElementById(alphabet);
    newHighlightedAlphabet.classList.add('highlighted-alphabet', 'bg-yellow-700', 'text-white');
}

document.addEventListener('keyup', function(event) {
    const userKey = event.key.toLowerCase(); // Convert to lowercase for comparison
    const playGroundAlphabet = document.getElementById('play-ground-alphabet').innerText.toLowerCase();

    if (userKey === playGroundAlphabet) {
        var current_score_element = document.getElementById('current-score');
        let current_score = parseInt(current_score_element.innerText);
        current_score++; // Increment score
        console.log(current_score);
        current_score_element.innerText = current_score;

        playGround(getRandomAlphabet()); 
    } else {
        const current_life = document.getElementById('current-life');
        let current_life_number = parseInt(current_life.innerText);
        current_life_number--; 
        current_life.innerText = current_life_number;

        if (current_life_number === 0) {
            hideElement("playground");
            showElement("final-score");
            const your_score = document.getElementById('your-score');
            const current_score = document.getElementById('current-score').innerText;
            your_score.innerText = current_score;
            playGround(getRandomAlphabet());
        }
    }
});

