//Toglogchiin eeljiig hadgalah huvisagch 1st-0, 2nd-1
var activePlayer = 0;
//onoog hadgalah.
var scores = [0, 0];
//toglogchiin eeljindee tsugluulgh onoo.
var roundScore = 0;
//shoonii buusan too 1 - 6 random uusgej ugnu.
var diceDom = document.querySelector(".dice");

//shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function() {
  //1-6 dotor random too gargaj avna.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //shoonii zurgiig web deer gargaj irne.
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  //   alert("Шоо буулаа : " + diceNumber);
  //Buusan too 1 ees yalgatai bol toglogciin eeljiin onoog nemegduulne.
  if (diceNumber !== 1) {
    //
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchToNextPlayer();
    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});
//Hold button score function
document.querySelector(".btn-hold").addEventListener("click", function() {
  //this player score adding to global score
  scores[activePlayer] += roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER !!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = "0";

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //ulaan tseg shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
//new game function
document.querySelector(".btn-new").addEventListener("click", function() {
  scores = [0, 0];
});
function init() {
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none";
}
