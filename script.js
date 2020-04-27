var questions = [
    {
        question: "Commonly used data types do NOT include:",
        choice1: "1. strings",
        choice2: "2. booleans",
        choice3: "3. alerts",
        choice4: "4. numbers",
        correct: ""
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        choice1: "1. quotes",
        choice2: "2. curly brackets",
        choice3: "3. parentheses",
        choice4: "4. square brackets",
        correct: ""
    },
    {
        question: "Arrays in Javascript can be used to store _____.",
        choice1: "1. numbers and strings",
        choice2: "2. other arrays",
        choice3: "3. booleans",
        choice4: "4. all of the above",
        correct: ""
    },
    {
        question: "String values must be encoled within _____ when being assigned to variables.",
        choice1: "1. commas",
        choice2: "2. curly brackets",
        choice3: "3. quotes",
        choice4: "4. parentheses",
        correct: ""
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript",
        choice2: "2. terminal/bash",
        choice3: "3. for loops",
        choice4: "4. console.log",
        correct: ""
    },
]

var start = document.getElementById("start");
start.textContent="Start!"
start.addEventListener("click", startQuiz);
var startText = document.getElementById("text");
var title = document.getElementById("title");
var question = document.getElementById("question");
var timer = document.getElementById("timer");

startText.textContent="Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
title.textContent="Coding Quiz Challenge";

function startQuiz (){
    title.style.display="none";
    startText.style.display="none";
    start.style.display="none";
    setTime();
    renderQuestion();
    question.style.display="block";
    button.style.display="block";

    function setTime() {
        var secondsLeft = 75;
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Timer: " + secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          highscores();
        }
      }, 1000);
    }
}

