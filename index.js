var p1 = Math.ceil(Math.random()*6);
var p2 = Math.ceil(Math.random()*6);
var imgP1 = "images/dice"+p1+".png";
var imgP2 = "images/dice"+p2+".png";

console.log("P1: "+p1+" and P2: "+p2);
console.log("P1: "+imgP1+" and P2: "+imgP2);

// Size of h1
document.querySelector("h1").style.fontSize = "4rem";
// Dice Images
document.querySelector(".img1").setAttribute("src",imgP1);
document.querySelector(".img2").setAttribute("src",imgP2);
// Winner
if(p1>p2){
  document.querySelector("h1").textContent = "🎉🎉Player1 Wins";
}
else if(p1<p2){
  document.querySelector("h1").textContent = "Player2 Wins🎉🎉";
}
else{
  document.querySelector("h1").textContent = "Match Draw";
}
