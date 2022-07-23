
//QUIZ QUESTIONS AND ANSWERS 

var quiz = [
    {
        question: "Which of the following is not a JavaScript data type?",
        options: ["boolean", "string", "cycle", "number"],
        answer: "cycle"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading style sheet", "Closing site style", "Corrisponding style sheet", "Capital sigil skink"],
        answer: "Cascading style sheet"
    },
    {
        question: "What is an array in coding?",
        options: ["collection of stored data", "a variety of languages", "to dress someone in clothes", "place in readiness"],
        answer: "collection of stored data"
    },
    {
        question: "Which of the following is NOT a common coding language",
        options: ["Javasript", "Python", "Swift", "Emolga"],
        answer: "Emolga"
    },
    {
        question:"",
        options: [""],
        answer: ""
    },
]

//Screen Elements

var startGame = document.querySelector("#start");

var title = document.getElementById("titleScreen");
var quizContainer = document.getElementById("quizContainer");
var timer = document.getElementById("time");
var question = document.getElementById("question");

//Options

var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");

//Set up variables

var startTime = 60;
var score = 0;

//!!  GAME FUNCTION  !!//

startGame.addEventListener("click", function() {
    console.log("game started!!");

    title.style.display = "none";
    quizContainer.style.display = "block";

    //Make element appear on screen
    timer.textContent = startTime;

    //Timer go!
    var timerOn = setInterval(function(){
        startTime--;
        timer.textContent = startTime;
        if (startTime <= 0){
            clearInterval(timerOn);
        }
    },1000);


    //Replace placeholder text with text from the array

    quizIndex = 0;
    
    question.textContent = quiz[quizIndex].question;
    optionA.textContent = quiz[quizIndex].options[0];
    optionB.textContent = quiz[quizIndex].options[1];
    optionC.textContent = quiz[quizIndex].options[2];
    optionD.textContent = quiz[quizIndex].options[3];

    //Listen to see what option player chooses

    optionA.addEventListener("click", function() {
        console.log("Chose option A!")
    });

    optionB.addEventListener("click", function() {
        console.log("Chose option B!")
    });

    optionC.addEventListener("click", function() {
        console.log("Chose option C!")
    });

    optionD.addEventListener("click", function() {
        console.log("Chose option D!")
    });

    //to do
    //loop to next set of data in array on answer click
    
});


