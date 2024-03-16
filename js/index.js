function playNow() {
  hideElement("hero");

  showElement("playground");

  var randomAlphabet = getRandomAlphabet();

  playGround(randomAlphabet);
}

function playAgain(){
  hideElement("final-score");
  hideElement("hero");
  showElement("playground");
  document.getElementById('current-score').innerText = '0';
  document.getElementById('current-life').innerText = '5';
  var randomAlphabet = getRandomAlphabet();
  playGround(randomAlphabet);
}