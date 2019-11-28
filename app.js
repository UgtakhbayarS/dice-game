//Toglogchiin eeljiig hadgalah huvisagch 1st-0, 2nd-1
var activePlayer = 1;
//onoog hadgalah
var scores = [0, 0];
//toglogchiin eeljindee tsugluulgh onoo
var roundScore = 0;
//shoonii buusan too 1 - 6 random uusgej ugnu

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  //   alert("Шоо буулаа : " + diceNumber);
});
