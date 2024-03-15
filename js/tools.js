function hideEvement(element){
    const selectId = document.getElementById(element);
    selectId.classList.add('hidden');
}

function showElement(element){
    const selectId = document.getElementById(element);
    selectId.classList.remove('hidden');
}

function getRandomAlphabet(){
    const AlphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetCollection = AlphabetString.split('');
    var  randomNumber = Math.random()*25;
    var randomNumber = Math.round(randomNumber);
    const alphabet = alphabetCollection[randomNumber];
    return alphabet;
}

function playGround(alphabet) {
    const playGroundAlphabet = document.getElementById('play-ground-alphabet');
    playGroundAlphabet.innerText = alphabet;

    const highlightedAlphabets = document.querySelectorAll('.highlighted-alphabet');
    highlightedAlphabets.forEach(element => {
        element.classList.remove('bg-yellow-700');
    });

    const newHighlightedAlphabet = document.getElementById(alphabet);
    newHighlightedAlphabet.classList.add('highlighted-alphabet', 'bg-yellow-700');
    newHighlightedAlphabet.classList.add('highlighted-alphabet', 'text-white');
}


document.addEventListener('keyup', function(event){
    const userKey = event.key;
    var play_ground_alphabet = document.getElementById('play-ground-alphabet');
    var play_ground_alphabet = play_ground_alphabet.innerText;
    var play_ground_alphabet = play_ground_alphabet.toLowerCase();
    if(userKey === play_ground_alphabet){
        console.log('Weldone');
        getRandomAlphabet();
        playGround(getRandomAlphabet());
        var current_score_element = document.getElementById('current-score');
        var current_score = parseInt(current_score_element.innerText);
        const update_score = current_score + 1;
        console.log(update_score);
        current_score_element.innerText = update_score;
    }
    else{
        const current_life = document.getElementById('current-life');
        const current_life_number = parseInt(current_life.innerText);
        const update_life = current_life_number - 1 ;
        current_life.innerText = update_life;
        if(update_life === 0){
            hideEvement("playground");
            showElement("final-score");
        }
    }

})