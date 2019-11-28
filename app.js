//Toglogchiin eeljiig hadgalah huvisagch 1st-0, 2nd-1
var activePlayer = 1;
//onoog hadgalah
var scores = [0, 0];
//toglogchiin eeljindee tsugluulgh onoo
var roundScore = 0;
//shoonii buusan too 1 - 6 random uusgej ugnu
var dice = Math.floor(Math.random() * 6) + 1;

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";

console.log("Шоо: " + dice);
