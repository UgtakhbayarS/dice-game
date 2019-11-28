//Toglogchiin eeljiig hadgalah huvisagch 1st-0, 2nd-1
var activePlayer = 0;
//onoog hadgalah.
var scores = [0, 0];
//toglogchiin eeljindee tsugluulgh onoo.
var roundScore = 0;
//shoonii buusan too 1 - 6 random uusgej ugnu.

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

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
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    //ulaan tseg shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});
