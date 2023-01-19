//variabelen
let scoreElement = document.getElementById("score");
let otherScoreElement = document.getElementById("otherScore");
let tonyElement = document.getElementById("tony1");
let otherTonyElement = document.getElementById("tony2");
let startTimerElement = document.getElementById("startTimer");

let score = 0;
let otherscore = 0
var timeleft = 3;

//wanneer je op de startTimer knop klikt, gaan alle scores naar nul en kun je op de tony repen klikken.
document.getElementById("startTimer").addEventListener("click", function(){
    
    score = 0;
    otherscore = 0
    document.getElementById("tony1").style.pointerEvents = "auto";
    document.getElementById("tony2").style.pointerEvents = "auto";

    //Bij elke tony reep wanneer je op de reep klikt, beweegt die naar een willekeurige locatie op de pagina en draait. 
    //Er komt dan een punt boven op je score.
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

    //Dit is een timer functie dat aftelt en op de pagina toont en gaat van start als er op de startTimer knop is geklikt.
    var downloadTimer = setInterval(function function1(){
    document.getElementById("timer").innerHTML = timeleft + 
    "&nbsp"+"seconds remaining";

    timeleft -= 1;

    //Hier word gecheckt om elke seconde of de timer om is en als de timer op nul staat, dan geeft de timer een tekst weer en kun je niet meer op de repen klikken.
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Time is up!";
        document.getElementById("tony1").style.pointerEvents = "none";
        document.getElementById("tony2").style.pointerEvents = "none";
    }
    }, 1000);
});