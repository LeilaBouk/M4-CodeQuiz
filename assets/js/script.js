//Make questions option buttons appear on start
//hide original elements
//make timer start on button click
//create questions array

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

var startGame = document.querySelector("#start");

startGame.addEventListener("click", function() {
    console.log("game started!!");
});


