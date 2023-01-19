//variabelen
let scoreElement = document.getElementById("score");
let otherScoreElement = document.getElementById("otherScore");
let tonyElement = document.getElementById("tony1");
let otherTonyElement = document.getElementById("tony2");
let startTimerElement = document.getElementById("startTimer");

let score = 0;
let otherscore = 0
var timeleft = 3;


document.getElementById("startTimer").addEventListener("click", function(){
    
    score = 0;
    otherscore = 0
    document.getElementById("tony1").style.pointerEvents = "auto";
    document.getElementById("tony2").style.pointerEvents = "auto";

    tonyElement.addEventListener("click", function() {
        this.style.left = Math.floor(Math.random()* window.innerWidth) + "px";
        this.style.top = Math.floor(Math.random()* window.innerHeight) + "px";
        this.style.transform = "rotate(" + Math.random()* 360 + "deg)";
        score++;
        scoreElement.innerHTML = score + " punten";
    });
    
    otherTonyElement.addEventListener("click", function() {
        this.style.left = Math.floor(Math.random()* window.innerWidth) + "px";
        this.style.top = Math.floor(Math.random()* window.innerHeight) + "px";
        this.style.width = Math.random()* 200 + "px";
        otherscore++;
        otherScoreElement.innerHTML = otherscore + " punten";
    });

    var downloadTimer = setInterval(function function1(){
    document.getElementById("timer").innerHTML = timeleft + 
    "&nbsp"+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Time is up!";
        document.getElementById("tony1").style.pointerEvents = "none";
        document.getElementById("tony2").style.pointerEvents = "none";
    }
    }, 1000);
});