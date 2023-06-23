var g = Math.floor((Math.random()*6))+1;
var g1 = Math.floor((Math.random()*6))+1;
var h = "images/dice" + g + ".png";
var h1 = "images/dice" + g1 + ".png";
document.querySelector(".img2").setAttribute("src", h);
document.querySelector(".img1").setAttribute("src", h1);

if (g1 > g) {
  var r = document.createElement("h1");
  r.textContent = "Player 1 has won";
  document.getElementById("unique").appendChild(r);
} else {
  var r = document.createElement("h1");
  r.textContent = "Player 2 has won";
  document.getElementById("unique").appendChild(r);
}
