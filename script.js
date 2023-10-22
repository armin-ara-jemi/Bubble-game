
var hitrn = 0;//build bubble
function makeBubble(){
  var clutter ="";
for(var i=1; i<=168; i++){
  var rn = Math.floor(Math.random()*10)
  clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
//timer
var timer = 60;
function runTimer(){
  var timerint = setInterval(function(){
    if(timer > 0){
    timer--;
    document.querySelector("#timervalue").textContent = timer;
    }
    else{
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1 class="h">GAME OVER</h1>`;
    }
  },1000)

}
//Hit
function getNewhit(){
  hitrn = Math.floor(Math.random()*10)
  document.querySelector("#hitvalue").textContent = hitrn;
}
//Score
var score = 0;
function increaseScore(){
  score +=10;
  document.querySelector("#increasescore").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click",function(details){
 var clickdnum = Number(details.target.textContent);
 if(clickdnum === hitrn){
  increaseScore();
  makeBubble();
  getNewhit();
 }
});
getNewhit();
runTimer();
makeBubble();