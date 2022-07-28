
//QUIZ QUESTIONS AND ANSWERS 

var quiz = [
    {
        question: "Which of the following is NOT a JavaScript data type?",
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
        question: "Which of the following is NOT a common coding language?",
        options: ["Javasript", "Python", "Swift", "Emolga"],
        answer: "Emolga"
    },
    {
        question:"What is a comment used for in code?",
        options: ["to execute functions", "to leave a comment within the code which doesn't effect the code itself", "for web users to leave feedback on a website", "to add bonus content to websites"],
        answer: "to leave a comment within the code which doesn't effect the code itself"
    },
    {
        question:"What is concat() used for in JavaScript?",
        options: ["to solve math equations", "to search for bugs", "to merge two or more arrays", "it is not used for anything"],
        answer: "to merge two or more arrays"
    },
    {
        question:"Which variable cannot have its value reassigned?",
        options: ["var", "const", "let", "undefined"],
        answer: "const"
    },
]

//Screen Elements

var startGame = document.querySelector("#startBtn");

var title = document.getElementById("titleScreen");
var quizContainer = document.getElementById("quizContainer");
var timer = document.getElementById("time");
var question = document.getElementById("question");
var playerScore = document.getElementById("score");
var gameOver = document.getElementById("gameOver");
var restart = document.getElementById("restart");
var saveScore = document.getElementById("saveScore");
var restart = document.getElementById("restart");

var mascot = document.getElementById("mascot");

//Options

var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");

//Set up variables

var startTime = 60000;

//HighScore Page

//!!  GAME FUNCTION  !!//

startGame.addEventListener("click", function() {
    console.log("game started!!");

    title.style.display = "none";
    quizContainer.style.display = "flex";

    //Make element appear on screen
    timer.textContent = startTime;

    //Timer go!
    var timerOn = setInterval(function(){
        startTime--;
        timer.textContent = startTime;
        if (startTime <= 0){
            clearInterval(timerOn);
            endGame();
        }
    },1000);


    //Replace placeholder text with text from the array

    quizIndex = 0;
    questionDisplayer();
    
    function questionDisplayer() {
    question.textContent = quiz[quizIndex].question;
    optionA.textContent = quiz[quizIndex].options[0];
    optionB.textContent = quiz[quizIndex].options[1];
    optionC.textContent = quiz[quizIndex].options[2];
    optionD.textContent = quiz[quizIndex].options[3];
}

    //Listen to see what option player chooses

    var response;

    optionA.addEventListener("click", function() {
        console.log("Chose option A!")
        response = quiz[quizIndex].options[0];
        checkAnswer();
    });

    optionB.addEventListener("click", function() {
        console.log("Chose option B!")
        response = quiz[quizIndex].options[1];
        checkAnswer();
    });

    optionC.addEventListener("click", function() {
        console.log("Chose option C!")
        response = quiz[quizIndex].options[2];
        checkAnswer();
    });

    optionD.addEventListener("click", function() {
        console.log("Chose option D!")
        response = quiz[quizIndex].options[3];
        checkAnswer();
    });

    //Now we check the answer by comparing the var in the options string to the var in the answer string

    function checkAnswer() {

        console.log("player answered " + response);
        console.log("correct answer is " + quiz[quizIndex].answer);

        if (quiz[quizIndex].answer === response) {
            console.log("Correct!")
            
            // MASCOT
            mascot.src = "./assets/images/happy.gif";
            setTimeout(function () {
                mascot.src = "./assets/images/PlaceHolder.png";
            }, 1000);
        }
        
        else {
            console.log("Wrong!")
            // MASCOT
            mascot.src = "./assets/images/sad.gif";
            setTimeout(function () {
                mascot.src = "./assets/images/PlaceHolder.png";
            }, 1000);

            //take time off 
            if (startTime >= 0) {
            startTime -= 10;
            timer.textContent = startTime;
             } 
        }

        //GO TO NEXT QUESTION
        quizIndex ++;

        if (quizIndex < quiz.length) {
            questionDisplayer();
        }
        else {
            endGame();
        }

    };
    
});


//END OF GAME

function endGame() {
    console.log("Game OVER!");
    quizContainer.style.display = "none";

    gameOver.style.display = "block";
    playerScore.textContent = startTime;

    restart.addEventListener("click", function() {

        window.location.reload();

    });

}
        


